from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import Adopter, Volunteer

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = '__all__'

    def create(self, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)


class AdopterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adopter
        fields = ['id', 'firstname', 'lastname', 'email', 'password', 'location']
        extra_kwargs = {
            'password': {'write_only': True}
        }