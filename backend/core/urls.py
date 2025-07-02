from django.urls import path
from .views import create_adopter
from .views import  liste_adopters, liste_animaux
from .views import liste_volunteers

urlpatterns = [
    path("adopter/", create_adopter, name="create_adopter"),
    path("adopters/", liste_adopters, name="liste_adopters"),
    path("animaux/", liste_animaux, name="liste_animaux"),
path("volunteers/", liste_volunteers, name="liste_volunteers"),
]
# urlpatterns = [
#     path("adopter/", create_adopter, name="create_adopter"),
#       path("api/adopters/", liste_adopters, name="liste_adopters"),
# ]
