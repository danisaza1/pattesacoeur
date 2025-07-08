from django.db import models
from django.contrib.auth.models import AbstractUser

class Staff(models.Model):
    firstname = models.TextField()
    lastname = models.TextField()
    birthdate = models.DateField()
    address = models.TextField()
    zipcode = models.CharField(max_length=20)
    telephone = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True)
    entry_date = models.DateField()
    exit_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Animal(models.Model):
    id = models.AutoField(primary_key=True)
    staff = models.ForeignKey(Staff, null=True, blank=True, on_delete=models.SET_NULL)
    name = models.TextField()
    animal_type = models.TextField()
    race = models.TextField()
    birthdate = models.DateField(null=True, blank=True)
    city = models.TextField()
    zipcode = models.CharField(max_length=20, null=True, blank=True)
    description = models.TextField()
    photo_url = models.TextField(null=True, blank=True)
    entry_date = models.DateField()
    exit_date = models.DateField(null=True, blank=True)  
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class AnimalStaff(models.Model):
    animal = models.ForeignKey(Animal, null=True, blank=True, on_delete=models.SET_NULL)
    staff = models.ForeignKey(Staff, null=True, blank=True, on_delete=models.SET_NULL)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    role = models.CharField(max_length=150, null=True, blank=True)
    comments = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Volunteer(AbstractUser):
    # Supprime le champ `username` par défaut pour utiliser l'email comme identifiant
    username = None

    email = models.EmailField(unique=True)  # utilisé comme identifiant principal
    telephone = models.CharField(max_length=20, unique=True)
    birthdate = models.DateField(null=True, blank=True)
    address = models.TextField()
    zipcode = models.CharField(max_length=20)
    # motivation = models.TextField(null=True, blank=True)
    disponibility = models.JSONField(null=True, blank=True)
    entry_date = models.DateField(null=True, blank=True)
    exit_date = models.DateField(null=True, blank=True)
    status = models.CharField(
        max_length=20,
        default="en attente",
        choices=[
            ("en attente", "En attente"),
            ("active", "Active"),
            ("inactif", "Inactif")
        ],
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # Configuration de l'identifiant utilisateur
    USERNAME_FIELD = 'email'  # champ utilisé pour se connecter
    REQUIRED_FIELDS = ['first_name', 'last_name']  # requis lors de la création via `createsuperuser`

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    # (Pas besoin de redéclarer id, first_name, last_name, email, password : hérités d'AbstractUser)

class VolunteerAvailability(models.Model):
    volunteer = models.ForeignKey(Volunteer, null=True, blank=True, on_delete=models.SET_NULL)
    start_date = models.DateField()
    end_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



class Assignment(models.Model):
    staff = models.ForeignKey(Staff, null=True, blank=True, on_delete=models.SET_NULL)
    volunteer = models.ForeignKey(Volunteer, null=True, blank=True, on_delete=models.SET_NULL)
    animal = models.ForeignKey(Animal, null=True, blank=True, on_delete=models.SET_NULL)
    name = models.TextField()
    task_type = models.TextField()
    status_task = models.TextField(null=True, blank=True)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


from django.db import models

class Adopter(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    location = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"

    # class Adopting(models.Model):
    # id = models.BigAutoField(primary_key=True)
    # firstname = models.TextField()
    # lastname = models.TextField()
    # email = models.TextField(db_column='Email', unique=True)  # Field name made lowercase.
    # password = models.TextField()
    # location = models.TextField()
    # created_at = models.DateTimeField(blank=True, null=True)
    # updated_at = models.DateTimeField(blank=True, null=True)



