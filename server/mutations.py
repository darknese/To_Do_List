from typing import Optional
import strawberry
import strawberry_django
from strawberry import auto
import strawberry_django.auth as auth
from strawberry_django import mutations
from type import User, UserInput


@strawberry.type()
class Mutation:
    login: Optional[User] = auth.login()
    logout = auth.logout()
    register: User = auth.register(UserInput)
