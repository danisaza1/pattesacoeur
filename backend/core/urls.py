from django.urls import path
from . import views

urlpatterns = [
    path('animaux/', views.liste_animaux, name='liste_animaux'),
]
