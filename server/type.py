from django.contrib.auth import get_user_model
import strawberry
import strawberry_django
from strawberry import auto


# types


@strawberry_django.type(get_user_model())
class User:
    username: auto
    email: auto


# input types


@strawberry_django.input(get_user_model())
class UserInput:
    username: auto
    password: auto
    email: auto
