import os
from datetime import timedelta
from typing import Optional

import pytz
from django.core.mail import EmailMessage
from django.utils.datetime_safe import datetime
from django.views import View
from knox.models import AuthToken
from rest_framework.exceptions import ErrorDetail
from rest_framework.generics import GenericAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer, Serializer

from .models import AccountActivation, IrisUser
from .serializers import RegisterSerializer, UserSerializer, LoginSerializer, ActivationSerializer


def validation_error_response(serializer: Serializer) -> Optional[Response]:
    try:
        serializer.is_valid(raise_exception=True)

    # noinspection PyBroadException
    except Exception:
        error_dict = {}
        for error in serializer.errors.keys():
            error_detail: ErrorDetail
            error_detail = serializer.errors[error][0]
            error_dict[error] = error_detail.code
        return Response({
            'result': 'error',
            'details': error_dict,
        })
    return None


class RegisterAPI(GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request: Request, *args, **kwargs):
        serializer: RegisterSerializer
        serializer = self.get_serializer(data=request.data)

        not_validated = validation_error_response(serializer)
        if not_validated:
            return not_validated

        user = serializer.save()
        activation = AccountActivation.objects.get_or_create(
            user=user,
            activation_code="ahoj1234",
            expiration=datetime.now(tz=pytz.UTC) + timedelta(hours=12)
        )
        activation.save()
        confirmation_mail = EmailMessage(
            'Activate Account',
            f'Secret code is: {activation.activation_code}',
            'noreply.iris@gmail.com',
            [serializer.validated_data['email']],
        )
        confirmation_mail.send()
        # token = AuthToken.objects.create(user)

        return Response(
            {
                'result': 'success',
                'user': UserSerializer(user, context=self.get_serializer_context()).data,
                # 'token': token[1]
            }
        )


class LoginAPI(GenericAPIView):
    serializer_class = LoginSerializer
    authentication_classes = ()
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        print(request.data)

        serializer: LoginSerializer
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except IrisUser.DoesNotExist:
            return Response({
                'result': 'invalid_user'
            })

        data = serializer.validated_data
        # possible results:
        #   - 'success'
        #   - 'invalid_user'
        #   - 'inactive_user'
        response_data = {
            'result': data['result'],
            'user': None
        }
        if data['user']:
            response_data['user'] = UserSerializer(data['user'], context=self.get_serializer_context()).data
            response_data['token'] = AuthToken.objects.create(data['user'])[1]

        return Response(response_data)


class UserAPIView(RetrieveAPIView):
    permission_classes = [
        IsAuthenticated
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class AccountActivationAPI(GenericAPIView):
    serializer_class = ActivationSerializer

    def post(self, request, *args, **kwargs):
        serializer: ActivationSerializer
        serializer = self.get_serializer(data=request.data)
        not_validated = validation_error_response(serializer)

        if not_validated:
            return not_validated

        data = serializer.validated_data

        if data['result'] != 'success':
            data['user'] = None
            return Response(data)

        user: IrisUser
        user = data['user']
        user.is_active = True
        user.save()

        AccountActivation.objects.get(user=user).delete()

        response_data = {
            'user': UserSerializer(data['user'], context=self.get_serializer_context()).data,
            'token': AuthToken.objects.create(data['user'])[1],
        }
        return Response(response_data)
