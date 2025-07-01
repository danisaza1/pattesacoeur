from django.urls import path
from . import views

urlpatterns = [
    # path('', views.home, name='home'),
    path('animaux/', views.liste_animaux, name='liste_animaux'),
<<<<<<< HEAD
    path('volunteers/', views.liste_volunteers, name='liste_volunteers' ),
=======
    path('volunteers/', views.liste_volunteers, name='liste_volunteers'),
>>>>>>> feae735 (Add GET and POST endpoints for volunteers)
]

