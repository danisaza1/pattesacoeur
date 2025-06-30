from django.http import JsonResponse
from .models import Animal

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
