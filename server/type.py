from django.contrib.auth import get_user_model
import strawberry
import strawberry_django
from strawberry import auto
from apps.todo import models


# filters


@strawberry_django.filters.filter(models.ToDo, lookups=True)
class ToDoFilter:
    id: auto
    title: auto
    field: auto


# types


@strawberry_django.type(models.ToDo, filters=ToDoFilter, pagination=True)
class ToDo:
    id: auto
    title: auto
    field: auto


@strawberry_django.type(get_user_model())
class User:
    username: auto
    email: auto


# input types


@strawberry_django.input(models.ToDo)
class ToDoInput:
    id: auto
    title: auto
    field: auto


@strawberry_django.input(get_user_model())
class UserInput:
    username: auto
    password: auto
    email: auto


@strawberry_django.input(models.ToDo, partial=True)
class ToDoPartialInput(ToDoInput):
    pass
