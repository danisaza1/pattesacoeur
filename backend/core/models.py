from django.db import models

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


class Volunteer(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()
    birthdate = models.DateField()
    address = models.TextField()
    zipcode = models.CharField(max_length=20)
    telephone = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128, null=True, blank=True)
    entry_date = models.DateField()
    exit_date = models.DateField(null=True, blank=True)
    status = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



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