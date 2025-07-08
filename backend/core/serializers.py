from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import Adopter, Animal, Volunteer
from core.models import VolunteerAvailability



class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'birthdate',
            'address',
            'zipcode',
            'telephone',
            # 'motivation',
            'disponibility',
            'entry_date',
            'exit_date',
            'status',
            'created_at',
            'updated_at',
        ]

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
        fields = [
            'id', 
            'firstname',
            'lastname',
            'email',
            'password',
            'location'
            ]
        extra_kwargs = {
            'password': {'write_only': True}
        }
        
    def create(self, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)        


class AnimalSerializer(serializers.ModelSerializer):
    imageUrl = serializers.SerializerMethodField()

    class Meta:
        model = Animal
        fields = ['type', 'name', 'breed', 'age', 'city', 'zipcode', 'description', 'imageUrl']

    def get_imageUrl(self, obj):
        return f"/images/{obj.image_filename}"

class VolunteerAvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerAvailability
        fields = '__all__'

