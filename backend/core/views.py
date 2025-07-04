from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.utils import timezone
from django.contrib.auth.hashers import make_password
from django.views.decorators.csrf import csrf_exempt
from core.models import Animal, Volunteer, Adopter
import json
import logging

# serializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Volunteer
from .serializers import VolunteerSerializer


logger = logging.getLogger(__name__)

@csrf_exempt
def liste_animaux(request):
    if request.method == "GET":
        animaux = Animal.objects.filter(exit_date__isnull=True)  # animaux encore présents
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
    else:
        return JsonResponse({'error': 'Méthode non autorisée'}, status=405)

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
        else:
            print("Serializer errors:", serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    elif request.method == 'PATCH':
        volunteer_id = request.query_params.get('id')
        if not volunteer_id:
            return Response({"error": "id query param is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            volunteer = Volunteer.objects.get(id=volunteer_id)
        except Volunteer.DoesNotExist:
            return Response({"error": "Volunteer not found"}, status=status.HTTP_404_NOT_FOUND)
        # Récupère les données de la requête
        data = request.data.copy()

        # Si on passe le statut à 'active' et que entry_date est vide, on remplit entry_date avec aujourd'hui
        if data.get('status') == 'active' and not volunteer.entry_date:
            from django.utils import timezone
            data['entry_date'] = timezone.now().date()

        serializer = VolunteerSerializer(volunteer, data=data, partial=True)
        if serializer.is_valid():
            if 'password' in serializer.validated_data:
                serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
            serializer.save()

            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def create_adopter(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            required_fields = ["firstname", "lastname", "email", "password", "location"]
            for field in required_fields:
                if field not in data or not data[field]:
                    return JsonResponse({"error": f"Le champ {field} est requis."}, status=400)

            raw_pwd = data.get("password")
            if not raw_pwd:
                return JsonResponse({'error': 'Mot de passe requis'}, status=400)
            hashed_pwd = make_password(raw_pwd)

            adopter = Adopter.objects.create(
                firstname=data["firstname"],
                lastname=data["lastname"],
                email=data["email"],
                password=hashed_pwd,  # N'oublie pas de définir ce champ dans ton modèle
                location=data["location"],
            )
            return JsonResponse({"message": "Adopteur créé", "id": adopter.id})
        except json.JSONDecodeError:
            return JsonResponse({"error": "JSON invalide"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    else:
        return JsonResponse({"error": "Méthode non autorisée"}, status=405)


@csrf_exempt
def liste_adopters(request):
    if request.method == "GET":
        adopters = Adopter.objects.all()
        data = []

        for adopter in adopters:
            adopter_dict = {
                'id': adopter.id,
                'firstname': adopter.firstname,
                'lastname': adopter.lastname,
                'email': adopter.email,
                'location': adopter.location,
            }
            data.append(adopter_dict)

        return JsonResponse(data, safe=False)
    else:
        return JsonResponse({"error": "Méthode non autorisée"}, status=405)
    

@csrf_exempt
def lastAdopters(request):
    if request.method == "GET":
        adopter = Adopter.objects.latest('created_at')  # Un seul objet, pas une liste

        adopter_dict = {
            'id': adopter.id,
            'firstname': adopter.firstname,
            'lastname': adopter.lastname,
            'email': adopter.email,
            'location': adopter.location,
        }

        return JsonResponse(adopter_dict, safe=False)  # un seul dictionnaire, pas une liste

    else:
        return JsonResponse({"error": "Méthode non autorisée"}, status=405)
''
       

       
