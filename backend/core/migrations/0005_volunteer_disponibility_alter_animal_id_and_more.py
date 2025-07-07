from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.AddField(
            model_name='volunteer',
            name='disponibility',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='animal',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='volunteer',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='volunteer',
            name='status',
            field=models.CharField(choices=[('en attente', 'En attente'), ('active', 'Active'), ('inactif', 'Inactif')], default='en attente', max_length=20),
        ),
    ]