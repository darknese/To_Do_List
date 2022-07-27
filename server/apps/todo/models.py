from django.db import models

# Create your models here.


class User(models.Model):
    """Модель для пользователя."""

    username = models.CharField(max_length=255, help_text='username')
    password = models.CharField(max_length=255, help_text='password')
    email = models.CharField(max_length=255, help_text='email')


class ToDo(models.Model):
    """Модель для Tудушки."""

    title = models.CharField(max_length=50, help_text='title')
    field = models.CharField(max_length=255, help_text='field_text')