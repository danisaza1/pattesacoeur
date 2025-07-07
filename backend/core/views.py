from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.utils import timezone
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import logging
from core.models import Animal, Volunteer, Adopter
from .serializers import VolunteerSerializer, AdopterSerializer

logger = logging.getLogger(__name__)

# Liste des animaux présents
@api_view(['GET'])
def liste_animaux(request):
    animaux = Animal.objects.filter(exit_date__isnull=True)
    data = []
    for animal in animaux:
        animal_dict = {
            'id': animal.id,
            'name': animal.name,
            'animal_type': animal.animal_type,
            'race': animal.race,
            'birthdate': animal.birthdate.isoformat() if animal.birthdate else None,
            'city': animal.city,
            'zipcode': animal.zipcode,
            'description': animal.description,
            'photo_url': animal.photo_url,
            'entry_date': animal.entry_date.isoformat(),
        }
        data.append(animal_dict)
    return JsonResponse(data, safe=False)

@api_view(['POST'])
def volunteer_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        volunteer = Volunteer.objects.get(email=email)
    except Volunteer.DoesNotExist:
        return Response({"error": "Email incorrect"}, status=400)

    if not check_password(password, volunteer.password):
        return Response({"error": "Mot de passe incorrect"}, status=400)

    # Créer une session Django
    request.session['volunteer_id'] = volunteer.id
    return Response({"message": "Connexion réussie", "volunteer_id": volunteer.id})
# Logout
@api_view(['POST'])
def volunteer_logout(request):
    request.session.flush()  # supprime toute la session (comme s’il/elle n’était jamais connecté(e))
    return Response({"message": "Déconnexion réussie"})

# Gestion des bénévoles
@api_view(['GET', 'POST', 'PATCH'])
def volunteers_list(request):
    if request.method == 'GET':
        volunteers = Volunteer.objects.filter(status="active")
        serializer = VolunteerSerializer(volunteers, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VolunteerSerializer(data=request.data)
        if serializer.is_valid():
            if 'password' in serializer.validated_data:
                serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PATCH':
        volunteer_id = request.query_params.get('id')
        if not volunteer_id:
            return Response({"error": "id query param is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            volunteer = Volunteer.objects.get(id=volunteer_id)
        except Volunteer.DoesNotExist:
            return Response({"error": "Volunteer not found"}, status=status.HTTP_404_NOT_FOUND)

        data = request.data.copy()

        if data.get('status') == 'active' and not volunteer.entry_date:
            data['entry_date'] = timezone.now().date()

        serializer = VolunteerSerializer(volunteer, data=data, partial=True)
        if serializer.is_valid():
            if 'password' in serializer.validated_data:
                serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Adopters: GET (liste) et POST (création) sur /api/adopter/
@api_view(['GET', 'POST'])
def liste_adopters(request):
    if request.method == "GET":
        adopters = Adopter.objects.all()
        serializer = AdopterSerializer(adopters, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        data = request.data.copy()
        required_fields = ["firstname", "lastname", "email", "password", "location"]
        for field in required_fields:
            if not data.get(field):
                return Response({"error": f"Le champ {field} est requis."}, status=status.HTTP_400_BAD_REQUEST)

        data['password'] = make_password(data['password'])
        serializer = AdopterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




