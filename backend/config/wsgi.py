import os
import sys

# Ajoute le dossier parent à sys.path pour que Django trouve ton projet
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

# Changez pour utiliser settings_vercel en production
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings_vercel')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()

# Pour Vercel - ajoutez cette ligne
app = application