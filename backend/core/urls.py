from django.urls import path
from .views import create_adopter
from .views import  liste_adopters, liste_animaux, volunteers_list

urlpatterns = [
    path("adopter/", create_adopter, name="create_adopter"),
    path("adopters/", liste_adopters, name="liste_adopters"),
    path("animaux/", liste_animaux, name="liste_animaux"),
    path('volunteers/', volunteers_list, name='volunteers_list'),
]


