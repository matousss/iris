# Generated by Django 4.0.2 on 2022-03-23 15:41

from django.db import migrations, models
import iris.profiles.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.FileField(default=None, null=True, upload_to=iris.profiles.models.avatar_file_path)),
            ],
        ),
    ]
