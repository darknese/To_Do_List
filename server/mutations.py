import typing
from typing import Optional, List
import strawberry
import strawberry_django
import strawberry_django.auth as auth
from strawberry_django import mutations
from type import User, UserInput, ToDo, ToDoInput, ToDoPartialInput


@strawberry.type()
class Mutation:
    createToDo: ToDo = mutations.create(ToDoInput)
    updateToDo: typing.List[ToDo] = mutations.update(ToDoPartialInput)
    deleteToDo: typing.List[ToDo] = mutations.delete()

    login: Optional[User] = auth.login()
    logout = auth.logout()
    register: User = auth.register(UserInput)


