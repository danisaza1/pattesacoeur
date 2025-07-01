from django.contrib import admin
from .models import Staff, Animal, AnimalStaff, Volunteer, VolunteerAvailability, Assignment,Adopter

admin.site.register(Staff)
admin.site.register(Animal)
admin.site.register(AnimalStaff)
admin.site.register(Volunteer)
admin.site.register(VolunteerAvailability)
admin.site.register(Assignment)
admin.site.register(Adopter)


