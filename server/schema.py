import typing
from typing import Optional
import strawberry
import strawberry_django
from strawberry import auto
from apps.todo import models
import strawberry_django.auth as auth
from strawberry_django import mutations
from django.contrib.auth import get_user_model


@strawberry_django.filters.filter(models.User)
class UserFilter:
    id: auto
    username: auto
    password: auto
    email: auto


@strawberry_django.type(get_user_model())
class User:
    username: auto
    email: auto


@strawberry_django.input(get_user_model())
class UserInput:
    username: auto
    password: auto
    email: auto


@strawberry.type
class Query:
    user: typing.List[User] = strawberry_django.field()


@strawberry.type()
class Mutation:
    login: Optional[User] = auth.login()
    logout = auth.logout()
    register: User = auth.register(UserInput)


schema = strawberry.Schema(query=Query, mutation=Mutation)
