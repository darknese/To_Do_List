import typing
import strawberry
import strawberry_django
from type import (
    User,
    ToDo
)
from mutations import Mutation


@strawberry.type
class Query:
    user: typing.List[User] = strawberry_django.field()
    todo: ToDo = strawberry_django.field()


schema = strawberry.Schema(query=Query)
