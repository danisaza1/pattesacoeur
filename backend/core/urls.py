from django.urls import path
from .views import  liste_adopters, liste_animaux, volunteers_list, volunteer_login, volunteer_logout, volunteer_me, lastAdopters, login_adopter, adopter_detail

urlpatterns = [
    path("adoptant/", liste_adopters, name="liste_adopters"),
    path("adoptant/login/", login_adopter, name="login_adopter"),
    path("adoptant/<int:pk>/", adopter_detail, name="adopter_detail"),
    path('lastone/', lastAdopters, name='lastAdopters'),
    path("animaux/", liste_animaux, name="liste_animaux"),
    path('volunteers/', volunteers_list, name='volunteers_list'),
    path("volunteers/login/", volunteer_login, name="volunteer_login"),
    path("volunteers/logout/", volunteer_logout, name="volunteer_logout"),
    path("volunteers/me/", volunteer_me, name="volunteer_me"),

]


