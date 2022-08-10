from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class ToDo(models.Model):
    """Модель для Tудушки."""

    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, help_text='title')
    field = models.CharField(max_length=255, help_text='field_text')

