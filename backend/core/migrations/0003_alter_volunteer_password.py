from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.AlterField(
            model_name='volunteer',
            name='password',
            field=models.CharField(default='motdepasse', max_length=255, null=True),
        ),
    ]
