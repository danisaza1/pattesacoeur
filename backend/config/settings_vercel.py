from .settings import *
import os

# Production settings
DEBUG = False
ALLOWED_HOSTS = ['.vercel.app', '.now.sh', 'localhost', '127.0.0.1']

# CORS pour votre front déployé
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:3001", 
    "http://localhost:3002",
    "https://backend.vercel.app",  # Changez par votre URL
]

# Fichiers statiques pour Vercel
STATIC_URL = '/static/'
STATIC_ROOT = '/tmp/static'

# Media files
MEDIA_URL = '/images/'
MEDIA_ROOT = '/tmp/images'

# La config DATABASE reste la même (héritée de settings.py)