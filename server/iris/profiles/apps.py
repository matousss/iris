from django.apps import AppConfig


class ProfilesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'iris.profiles'
    label = 'iris_profiles'

    def ready(self):
        from . import signals

