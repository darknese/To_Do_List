from typing import Optional
import strawberry
import strawberry_django
from strawberry import auto
import strawberry_django.auth as auth
from strawberry_django import mutations
from type import User, UserInput, ToDo, ToDoInput, ToDoPartialInput
from typing import List


@strawberry.type()
class Mutation:
    createToDo: ToDo = mutations.create(ToDoInput)
    updateToDo: ToDo = mutations.update(ToDoPartialInput)
    deleteToDo: ToDo = mutations.delete()

    login: Optional[User] = auth.login()
    logout = auth.logout()
    register: User = auth.register(UserInput)
