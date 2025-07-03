
from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='volunteer',
            name='password',
            preserve_default=False,
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
