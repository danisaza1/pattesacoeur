https://patacoeur-backend-gurzf6acq-delormes-projects-0785702a.vercel.app/api/lastone/


Romain
  15 h 03
:page_imprimée: Documentation Déploiement Django sur Vercel
:coche_blanche: Prérequis
Avoir un projet Django existant
Avoir installé vercel CLI et être connecté
:coche_blanche: Étapes d'installation de Vercel CLI
1. Pré-requis : Node.js et npm
Assure-toi que Node.js (et donc npm) est installé :
2. Installer Vercel CLI globalement avec npm
npm install -g vercel
Cela installe la commande vercel globalement.
3. Vérifier que l'installation a fonctionné
vercel --version
Tu devrais voir la version de Vercel CLI installée.
4. Connexion à ton compte Vercel
vercel login
Entre ton adresse email, puis suis le lien de vérification envoyé dans ta boîte mail.
5. Déployer ton projet
Place-toi dans le dossier de ton projet et lance :
vercel
Tu peux accepter les options par défaut ou les personnaliser (nom du projet, framework utilisé, etc.).
Avoir un fichier requirements.txt à jour
Pour créer le fichier s’il n’existe pas pip freeze > requirements.txt
Avoir un fichier wsgi.py valide
Avoir un fichier .env pour les variables d’environnement
:puzzle: Étapes techniques dans l'ordre
1. :colis: Ajouter les dépendances nécessaires
Dans requirements.txt, ajouter :
gunicorn
dj-database-url
python-dotenv
Puis :
pip install -r requirements.txt
2. :vieille_clé: Gérer les variables d’environnement
Créer un fichier .env à la racine du projet Django avec :
SECRET_KEY=ta_clé_secrète
DEBUG=False
DATABASE_URL=postgres://...
VERCEL_URL=nom_deploy.vercel.app
3. :roue_dentée: Modifier settings.py
:clé: Sécuriser la récupération du SECRET_KEY
SECRET_KEY = os.getenv('SECRET_KEY')
if not SECRET_KEY:
    raise Exception("SECRET_KEY is not set in environment")
:globe_avec_méridiens: Dynamiser ALLOWED_HOSTS
ALLOWED_HOSTS = ['localhost', '127.0.0.1', '.vercel.app']

vercel_url = os.getenv("VERCEL_URL")
if vercel_url:
    ALLOWED_HOSTS.append(vercel_url.replace("https://", "").replace("http://", ""))
:cadenas: Forcer la sécurité en production (optionnel mais recommandé)
if not DEBUG:
    SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
    SECURE_SSL_REDIRECT = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
:globe_avec_méridiens: Gérer CORS_ALLOWED_ORIGINS dynamiquement
CORS_ALLOWED_ORIGINS = [
    "<http://localhost:3000>",
]

if vercel_url:
    CORS_ALLOWED_ORIGINS.append(f"https://{vercel_url}")
4. :roue_dentée: Configurer la base de données avec dj_database_url
DATABASES = {
    'default': dj_database_url.config(
        default=os.getenv('DATABASE_URL'),
        conn_max_age=600,
    )
}
Installer dj-database-url : pip install dj-database-url
5. :tube_essai: Tester localement
python manage.py runserver
Vérifier que tout fonctionne sans erreur localement.
6. :fusée: Déployer sur Vercel
6.1 Créer un fichier vercel.json à la racine :
{
  "builds": [
    {
      "src": "adaopte_back_tsx/wsgi.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "adaopte_back_tsx/wsgi.py"
    }
  ]
}
Remplace "adaopte_back_tsx/wsgi.py" par le chemin exact vers ton wsgi.py.
6.2 Lancer le déploiement
vercel --prod
:coche_blanche: Résultat
L'API Django fonctionne sur un sous-domaine Vercel.
Les erreurs comme SECRET_KEY missing, DisallowedHost, No DATABASE_URL, etc. sont corrigées.
Le projet est prêt pour un usage sécurisé en production.