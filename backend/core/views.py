from django.http import JsonResponse
<<<<<<< HEAD
from django.views.decorators.csrf import csrf_exempt
from .models import Animal
from django.contrib.auth.hashers import make_password
from .models import Volunteer
import json
#
# def home(request):
#     return HttpResponse("Bienvenue sur l'API !")
=======
from django.contrib.auth.hashers import make_password
from django.views.decorators.csrf import csrf_exempt
from .models import Animal, Volunteer
import json

>>>>>>> feae735 (Add GET and POST endpoints for volunteers)
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
<<<<<<< HEAD

@csrf_exempt
def liste_volunteers(request):
    if request.method == "GET":
        volunteers_qs = Volunteer.objects.filter(exit_date__isnull=True).values(
            'id', 'first_name', 'last_name', 'birthdate',
            'address', 'zipcode', 'entry_date', 'status'
        )
        data = list(volunteers_qs)
=======
@csrf_exempt
def liste_volunteers(request):
    if request.method == "GET":
        volunteers = Volunteer.objects.filter(status="active").values('first_name', 'last_name', 'email')
        data = list(volunteers)  # Convertir le QuerySet en liste
>>>>>>> feae735 (Add GET and POST endpoints for volunteers)
        return JsonResponse(data, safe=False)

    elif request.method == "POST":
        try:
            data = json.loads(request.body)
<<<<<<< HEAD

            # Extraction des champs
            first_name    = data.get('first_name')
            last_name     = data.get('last_name')
            birthdate     = data.get('birthdate')    # format 'YYYY-MM-DD'
            address       = data.get('address')
            raw_pwd       = data.get('password')
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


    # ou sans sans data = list(volunteers )
    # return JsonResponse(list(volunteers), safe=False)


    #     return JsonResponse({'message': 'Liste des bénévoles'})
    # elif request.method == 'POST':
    #     # Logique pour POST
    #     return JsonResponse({'message': 'Bénévole créé'})
    # else:
    #     return JsonResponse({'error': 'Méthode non autorisée'}, status=405)
=======
            first_name = data.get('first_name')
            last_name = data.get('last_name')
            email = data.get('email')
            telephone = data.get('telephone')
            zipcode = data.get('zipcode')
            entry_date = data.get('entry_date')
            exit_date = data.get('exit_date', None)
            status = data.get('status', 'active')
            password = data.get('password')

            birthdate = data.get('birthdate')
            missing_fields = [field for field in ['first_name', 'last_name', 'email', 'telephone', 'entry_date', 'birthdate'] if not data.get(field)]

            if not password:
                missing_fields.append("password")

            if missing_fields:
                return JsonResponse({
                    'error': f"Les champs suivants sont obligatoires : {', '.join(missing_fields)}"
                }, status=400)

            hashed_password = make_password(password)
            volunteer = Volunteer.objects.create(
                first_name=first_name,
                last_name=last_name,
                email=email,
                telephone=telephone,
                zipcode=zipcode,
                birthdate=birthdate,
                entry_date=entry_date,
                exit_date=exit_date,
                status=status,
                password=hashed_password
            )

            return JsonResponse({
                'id': volunteer.id,
                'first_name': volunteer.first_name,
                'last_name': volunteer.last_name,
                'email': volunteer.email,
                'status': volunteer.status,
            }, status=201)


        except json.JSONDecodeError:
            return JsonResponse({'error': 'Format JSON invalide.'}, status=400)

        except Exception as e:
            print("Erreur serveur :", str(e))  # ← Utile dans la console pour déboguer
            return JsonResponse({'error': 'Une erreur interne est survenue.'}, status=500)

    else:
        return JsonResponse({'error': 'Méthode HTTP non autorisée.'}, status=405)
>>>>>>> feae735 (Add GET and POST endpoints for volunteers)
