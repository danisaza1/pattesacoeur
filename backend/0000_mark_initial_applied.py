from django.db import migrations

class Migration(migrations.Migration):

    dependencies = []

    operations = []

    def apply(self, project_state, schema_editor, collect_sql=False):
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("""
                INSERT INTO django_migrations (app, name, applied)
                VALUES ('core', '0001_initial', NOW())
                ON CONFLICT DO NOTHING;
            """)
        return super().apply(project_state, schema_editor, collect_sql)
