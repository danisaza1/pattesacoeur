# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Adopting(models.Model):
    id = models.BigAutoField(primary_key=True)
    firstname = models.TextField()
    lastname = models.TextField()
    email = models.TextField(db_column='Email', unique=True)  # Field name made lowercase.
    password = models.TextField()
    location = models.TextField()
    created_at = models.DateTimeField(blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'adopting'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class CoreAnimal(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.TextField()
    animal_type = models.TextField()
    race = models.TextField()
    birthdate = models.DateField(blank=True, null=True)
    city = models.TextField()
    zipcode = models.CharField(max_length=20, blank=True, null=True)
    description = models.TextField()
    photo_url = models.TextField(blank=True, null=True)
    entry_date = models.DateField()
    exit_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    staff = models.ForeignKey('CoreStaff', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'core_animal'


class CoreAnimalstaff(models.Model):
    id = models.BigAutoField(primary_key=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    role = models.CharField(max_length=150, blank=True, null=True)
    comments = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    animal = models.ForeignKey(CoreAnimal, models.DO_NOTHING, blank=True, null=True)
    staff = models.ForeignKey('CoreStaff', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'core_animalstaff'


class CoreAssignment(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.TextField()
    task_type = models.TextField()
    status_task = models.TextField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    animal = models.ForeignKey(CoreAnimal, models.DO_NOTHING, blank=True, null=True)
    staff = models.ForeignKey('CoreStaff', models.DO_NOTHING, blank=True, null=True)
    volunteer = models.ForeignKey('CoreVolunteer', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'core_assignment'


class CoreStaff(models.Model):
    id = models.BigAutoField(primary_key=True)
    firstname = models.TextField()
    lastname = models.TextField()
    birthdate = models.DateField()
    address = models.TextField()
    zipcode = models.CharField(max_length=20)
    telephone = models.CharField(unique=True, max_length=20)
    email = models.CharField(unique=True, max_length=254)
    entry_date = models.DateField()
    exit_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'core_staff'


class CoreVolunteer(models.Model):
    id = models.BigAutoField(primary_key=True)
    first_name = models.TextField()
    last_name = models.TextField()
    birthdate = models.DateField()
    address = models.TextField()
    zipcode = models.CharField(max_length=20)
    telephone = models.CharField(unique=True, max_length=20)
    email = models.CharField(unique=True, max_length=254)
    entry_date = models.DateField()
    exit_date = models.DateField(blank=True, null=True)
    status = models.TextField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'core_volunteer'


class CoreVolunteeravailability(models.Model):
    id = models.BigAutoField(primary_key=True)
    start_date = models.DateField()
    end_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    volunteer = models.ForeignKey(CoreVolunteer, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'core_volunteeravailability'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
