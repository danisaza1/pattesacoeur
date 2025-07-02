
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password
from django.views.decorators.csrf import csrf_exempt
from core.models import Animal, Volunteer, Adopter
import json

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

@csrf_exempt
def liste_volunteers(request):
    if request.method == "GET":
        volunteers = Volunteer.objects.filter(status="active").values('first_name', 'last_name', 'email', 'birthdate', 'address', 'zipcode', 'status')
      # Convertir le QuerySet en liste
        return JsonResponse(list(volunteers), safe=False)

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

    elif request.method == "PATCH":
        try:
            volunteer_id = request.GET.get('id')  # Récupérer l'ID via la query string, ex: ?id=1
            volunteer = Volunteer.objects.get(id=volunteer_id)

            # Parse les données JSON envoyées avec la requête
            data = json.loads(request.body)  # On charge les données JSON dans un dictionnaire

            fields_to_update = [
                'first_name', 'last_name', 'birthdate', 'address',
                'zipcode', 'telephone', 'email', 'password'
            ]

            # Itérer sur les champs et mettre à jour ceux présents dans les données
            for field in fields_to_update:
                if field in data:
            # Si c'est le champ 'password', il faut le hacher avant de l'assigner
                    if field == 'password':
                        volunteer.password = make_password(data['password'])
                    else:
                        setattr(volunteer, field, data[field])  # Met à jour le champ correspondant
            volunteer.save()
            return JsonResponse({'message': 'Volunteer added successfully!'}, status=201)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
            return JsonResponse({'error': 'Méthode non autorisée'}, status=405)


@csrf_exempt
def create_adopter(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            required_fields = ["firstname", "lastname", "email", "password", "location"]
            for field in required_fields:
                if field not in data or not data[field]:
                    return JsonResponse({"error": f"Le champ {field} est requis."}, status=400)

            adopter = Adopter.objects.create(
                firstname=data["firstname"],
                lastname=data["lastname"],
                email=data["email"],
                password=data["password"],  # Pense à hasher le mot de passe en prod !
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
        adopters = Adopter.objects.all()  # <- attention à .objects et pas .object
        data = []

        for adopter in adopters:  # <- tu avais oublié la boucle
            adopter_dict = {
                'id': adopter.id,
                'prenom': adopter.firstname,
                'nom': adopter.lastname,
                'email': adopter.email,
                'location': adopter.location,
            }
            data.append(adopter_dict)

        return JsonResponse(data, safe=False)
    else:
        return JsonResponse({"error": "Méthode non autorisée"}, status=405)