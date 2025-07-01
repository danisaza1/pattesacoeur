from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Animal
from django.contrib.auth.hashers import make_password
from .models import Volunteer
import json

# def home(request):
#     return HttpResponse("Bienvenue sur l'API !")
from django.contrib.auth.hashers import make_password
from django.views.decorators.csrf import csrf_exempt
from .models import Animal, Volunteer
import json

@csrf_exempt
def liste_animaux(request):
    if request.method == "GET":
        animaux = Animal.objects.filter(exit_date__isnull=True)  # animaux encore présents
        data = []
        for animal in animaux:
            # Convertir l'objet en dict en gardant les champs utiles
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


@csrf_exempt
def liste_volunteers(request):
    if request.method == "GET":
        volunteers = Volunteer.objects.filter(status="active").values('first_name', 'last_name', 'email')
        data = list(volunteers)  # Convertir le QuerySet en liste
        return JsonResponse(data, safe=False)

    elif request.method == "POST":
        try:
            data = json.loads(request.body)


            # Extraction des champs
            first_name    = data.get('first_name')
            last_name     = data.get('last_name')
            birthdate     = data.get('birthdate')    # format 'YYYY-MM-DD'
            address       = data.get('address')
            raw_pwd       = data.get('password')
            if not raw_pwd:
                return JsonResponse({'error': 'Mot de passe requis'}, status=400)
            hashed_pwd    = make_password(raw_pwd) if raw_pwd else None
            zipcode       = data.get('zipcode')
            status        = data.get('status')
            entry_date    = data.get('entry_date')
            exit_date_raw = data.get('exit_date')     # facultatif

            if not first_name or not last_name or not birthdate or not address:
                return JsonResponse({'error': 'Certains champs obligatoires sont manquants'}, status=400)
            # Création de l'objet en base
            volunteer = Volunteer.objects.create(
                first_name=first_name,
                last_name=last_name,
                birthdate=birthdate,
                address=address,
                password=hashed_pwd,
                zipcode=zipcode,
                status=status,
                entry_date=entry_date,
                exit_date=exit_date_raw if exit_date_raw else None,
            )

            return JsonResponse(
                {'message': 'Bénévole créé', 'id': volunteer.id},
                status=201
            )
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    else:
        return JsonResponse({'error': 'Méthode non autorisée'}, status=405)

