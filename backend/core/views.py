
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import Animal, Adopter
import json

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
        return JsonResponse({"error": "Méthode non autorisée"}, status=405)


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
   
   
    # def liste_adopters(request):
    # if request.method == "GET":
    #     adopters = Adopter.objects.all()
    #     data = []
    #     for adopter in adopters:
    #         adopter_dict = {
    #             'id': adopter.id,
    #             'prenom': adopter.firstname,
    #             'nom': adopter.lastname,
    #             'email': adopter.email,
    #             'location': adopter.location,
    #         }
    #         data.append(adopter_dict)
    #     return JsonResponse(data, safe=False)
    # else:
    #     return JsonResponse({"error": "Méthode non autorisée"}, status=405)
    

# def liste_adopters(request):
#     if request.method == "GET":
#         adopters = Adopter.objects.all()
#         data = []
#         for adopter in adopters:
#             adopter_dict = {
#                 'id': adopter.id,
#                 'prenom': adopter.firstname,
#                 'nom': adopter.lastname,
#                 'email': adopter.email,
#                 'location': adopter.location,
#             }
#             data.append(adopter_dict)
#         return JsonResponse(data, safe=False)
#     else:
#         return JsonResponse({"error": "Méthode non autorisée"}, status=405)
    
#     from django.views.decorators.csrf import csrf_exempt
# from django.http import JsonResponse
# from .models import Animal, Adopter
# import json
