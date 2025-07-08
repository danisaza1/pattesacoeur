from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed
from core.models import Adopter

class AdopterJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        result = super().authenticate(request)
        if result is None:
            print("Pas de token trouvé")
            return None

        validated_token = result[1]
        adopter_id = validated_token.get("adopter_id")

        if not adopter_id:
            print("adopter_id manquant dans le token")
            raise AuthenticationFailed("Token invalide")

        try:
            adopter = Adopter.objects.get(id=adopter_id)
            print("Adoptant trouvé :", adopter)
        except Adopter.DoesNotExist:
            raise AuthenticationFailed("Adoptant introuvable")

        return (adopter, validated_token)
