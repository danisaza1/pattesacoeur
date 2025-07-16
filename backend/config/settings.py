import os
from pathlib import Path
from dotenv import load_dotenv
from urllib.parse import urlparse, parse_qsl
from datetime import timedelta

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=1),  # Token d'accès valable pendant 1 heure
    'REFRESH_TOKEN_LIFETIME': timedelta(hours=1),  # Token de rafraîchissement valable pendant 1 heure
}

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(dotenv_path=Path(BASE_DIR) / ".env")  # charge les variables d'environnement

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv('SECRET_KEY', 'django-insecure-fe8jzg8sh*w13@v#p*-08$&)(+781pu!o!h26*3g+q*)aldtd%')

DEBUG = True

MEDIA_URL = '/images/'  # URL para acceder a las imágenes
MEDIA_ROOT = BASE_DIR / 'images'  # carpeta física en disco donde están las imágenes


ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    'pattesacoeur-brs3-git-main-danisaza1s-projects.vercel.app',
    'pattesacoeur-brs3-jdojc413x-danisaza1s-projects.vercel.app',
    # Ou plus simple, accepter tous les sous-domaines Vercel :
    '.vercel.app',
]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'core',
    'corsheaders',
    'rest_framework',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',  # Authentification JWT
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    # Permet uniquement aux utilisateurs authentifiés de voir les données
    ),
}
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # doit être en premier
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


tmpPostgres = urlparse(os.getenv("DATABASE_URL"))

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': tmpPostgres.path.lstrip('/'),
        'USER': tmpPostgres.username,
        'PASSWORD': tmpPostgres.password,
        'HOST': tmpPostgres.hostname,
        'PORT': tmpPostgres.port or 5432,
        'OPTIONS': dict(parse_qsl(tmpPostgres.query)),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
     "http://localhost:3001",
     "http://localhost:3002"
]

CORS_ALLOWED_ORIGIN_REGEXES = [
    r"^https://.*\.vercel\.app$",  # Accepte tous les sous-domaines .vercel.app
]

CORS_ALLOW_CREDENTIALS = True

# 🔐 Configuration des sessions Django
SESSION_COOKIE_AGE = 3600  # la session dure 1 heure
SESSION_EXPIRE_AT_BROWSER_CLOSE = False  # elle reste active même si l’utilisateur ferme l’onglet
SESSION_SAVE_EVERY_REQUEST = True  # chaque clic ou requête prolonge la session

AUTH_USER_MODEL = 'core.Volunteer'