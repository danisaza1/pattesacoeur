from django.urls import path
from .views import create_adopter

urlpatterns = [
    path("adopter/", create_adopter, name="create_adopter"),
]