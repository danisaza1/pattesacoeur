from django.http import JsonResponse
from django.utils import timezone
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
import logging
from core.models import Animal, Volunteer, Adopter, VolunteerAvailability
from .serializers import VolunteerSerializer, AdopterSerializer, VolunteerAvailabilitySerializer
from rest_framework_simplejwt.authentication import JWTAuthentication

logger = logging.getLogger(__name__)


# Liste des animaux présents
@api_view(['GET'])
@permission_classes([])
@authentication_classes([])
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
@permission_classes([])
def volunteer_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        volunteer = Volunteer.objects.get(email=email)
    except Volunteer.DoesNotExist:
        return Response({"error": "Email incorrect"}, status=400)

    if not check_password(password, volunteer.password):
        return Response({"error": "Mot de passe incorrect"}, status=400)

    refresh = RefreshToken.for_user(volunteer)
    access_token = refresh.access_token

    return Response({
        "message": "Connexion réussie",
        "access_token": str(access_token),
        "refresh_token": str(refresh)
    })


@api_view(['POST'])
def volunteer_logout(request):
    request.session.flush()
    return Response({"message": "Déconnexion réussie"})


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def volunteer_me(request):
    serializer = VolunteerSerializer(request.user)
    return Response(serializer.data)

@api_view(['GET', 'POST', 'PATCH', 'DELETE'])
@authentication_classes([])  # pas d'auth globale ici
@permission_classes([])      # pas de permission globale non plus
def volunteers_list(request):
    if request.method == 'POST':
        # 🔓 POST ouvert à tous
        serializer = VolunteerSerializer(data=request.data)
        if serializer.is_valid():
            if 'password' in serializer.validated_data:
                serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # 🔒 Authentification requise pour GET, PATCH, DELETE
    jwt_authenticator = JWTAuthentication()
    try:
        user_auth_tuple = jwt_authenticator.authenticate(request)
        if user_auth_tuple is None:
            return Response({"detail": "Authentification requise."}, status=status.HTTP_401_UNAUTHORIZED)
        request.user = user_auth_tuple[0]
    except Exception as e:
        return Response({"detail": "Authentification invalide."}, status=status.HTTP_401_UNAUTHORIZED)

    if request.method == 'GET':
        volunteers = Volunteer.objects.filter(status="active")
        serializer = VolunteerSerializer(volunteers, many=True)
        return Response(serializer.data)

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

    elif request.method == 'DELETE':
        volunteer_id = request.query_params.get('id')
        if not volunteer_id:
            return Response({"error": "id query param is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            volunteer = Volunteer.objects.get(id=volunteer_id)
        except Volunteer.DoesNotExist:
            return Response({"error": "Volunteer not found"}, status=status.HTTP_404_NOT_FOUND)
        volunteer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
@permission_classes([])
@authentication_classes([])
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


@api_view(['GET'])
@permission_classes([])
@authentication_classes([])
def lastAdopters(request):
    try:
        adopter = Adopter.objects.latest('created_at')
    except Adopter.DoesNotExist:
        return JsonResponse({"error": "Aucun adoptant trouvé"}, status=404)
    adopter_dict = {
        'id': adopter.id,
        'firstname': adopter.firstname,
        'lastname': adopter.lastname,
        'email': adopter.email,
        'location': adopter.location,
    }
    return JsonResponse(adopter_dict, safe=False)


@api_view(['POST'])
@permission_classes([])
@authentication_classes([])
def login_adopter(request):
    email = request.data.get("email")
    password = request.data.get("password")

    if not email or not password:
        return Response({"error": "Email et mot de passe requis."}, status=400)

    try:
        adopter = Adopter.objects.get(email=email)
    except Adopter.DoesNotExist:
        return Response({"error": "Adoptant non trouvé."}, status=404)

    if check_password(password, adopter.password):
        return Response({"message": "Connexion réussie", "adopter_id": adopter.id})
    else:
        return Response({"error": "Mot de passe incorrect."}, status=401)

@api_view(['GET'])
@permission_classes([])
@authentication_classes([])
def adopter_detail(request, pk):
    try:
        adopter = Adopter.objects.get(pk=pk)
    except Adopter.DoesNotExist:
        return Response({"error": "Adoptant introuvable."}, status=404)

    serializer = AdopterSerializer(adopter)
    return Response(serializer.data)

@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def create_availability(request):
    serializer = VolunteerAvailabilitySerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
