<h1 align="center">Tallys</h1>

<p align="center">
  <b><i>Collecte, analyse et prédiction des courses hippiques PMU</i></b>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs" alt="Next.js" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
</p>

Documentation rédigée selon le modèle RDG README — Général — Version : 0.1 (2022-11-22).

Ce fichier README a été généré le 2026-09-19 par Cyril PERIE.

Dernière mise-à-jour le : 2026-09-19.

# INFORMATIONS GENERALES

## Titre du jeu de données

Tallys — données de courses hippiques PMU (programmes, réunions, courses, partants et rapports).

## Description

Tallys est un projet de collecte, d’analyse et de prédiction sur les courses hippiques. L’application récupère les données brutes de l’API publique PMU, les explore, entraînera des modèles, puis exposera leurs résultats sous forme de métriques exploitables.

Ce dépôt contient l’interface (Next.js). Les données brutes sont stockées et agrégées par un backend séparé, interrogé via `BACKEND_URL`.

Couverture temporelle : historique depuis le **01/01/2014**.

Parcours documenté :

1. **Récupération** — collecte automatique et suivi des scrapers (disponible)
2. **Exploration** — structure, biais et pouvoir prédictif des variables (disponible)
3. **Modélisation** — modèles statistiques et d’apprentissage (en cours)
4. **Résultats** — observation des paris réalisés à partir des modèles (en cours)

Dépôt : [https://github.com/CyrilPERIE/pmu-app](https://github.com/CyrilPERIE/pmu-app)

## Adresse de contact

Cyril PERIE — [https://www.cypit.dev](https://www.cypit.dev)

# INFORMATIONS METHODOLOGIQUES

## Description des sources et méthodes utilisées pour collecter et générer les données

Source unique : **API publique PMU**.

Les objets collectés correspondent à la hiérarchie hippique habituelle :

- **programme / journée de courses** : date du calendrier, ensemble des réunions du jour ;
- **réunion** : hippodrome, créneau, météo, famille de courses ;
- **course** : discipline, distance, dotation, horaire, terrain ;
- **partants / chevaux engagés** : participants d’une course ;
- **combinaisons / rapports de paris** : cotes et rapports associés aux types de paris.

La pipeline de récupération a été construite après inventaire des endpoints, de la pagination et des paramètres de l’API. Le scraper stocke d’abord les réponses JSON brutes en base, afin de pouvoir tester, visualiser et rejouer le parsing sans rappeler l’API.

Un scheduler est prévu pour une collecte régulière (incrémentale) en plus du rattrapage historique.

## Méthodes de traitement des données

1. **Collecte** : appels à l’API PMU, pagination, enregistrement des JSON de réponse et des logs de scraper (début, fin, durée, statut).
2. **Agrégation** : calcul de métriques de volume (comptages, moyennes, année la plus ancienne, taille de la base) exposées par le backend sur `GET /metrics/recuperation`.
3. **Normalisation d’affichage** (ce dépôt) : mapping des statuts scraper (`completed` → Terminé, `failed` → Échec, autre → En cours) ; formatage des quantités (K / M) ; graphiques de répartition des runs.
4. **Exploration** : notebooks exportés en HTML, embarqués dans l’interface, pour un premier panorama (complétude, biais, variables connues avant le départ).
5. **Modélisation et résultats** : non encore appliqués dans l’application.

Aucune anonymisation n’est appliquée : les données concernent des épreuves sportives publiques, pas des personnes physiques au sens d’un traitement de données personnelles.

## Procédures d’assurance-qualité appliquées sur les données

- Journalisation de chaque run de scraper (`id`, pipeline, horodatage, durée, statut).
- Indicateurs de santé des pipelines dans l’interface : en cours de récupération, pipelines actives, pipelines éteintes (dernier run en échec).
- Comptages de succès / échecs / en cours, agrégés par pipeline et au global.
- Suivi de la taille de la base et des volumes (programmes, réunions, courses, participants, combinaisons).
- Exploration qualitative de la complétude (ce qui est renseigné, ce qui ne l’est pas) dans le notebook `001_exploration`.

Les JSON bruts sont conservés pour permettre un re-traitement si le schéma d’interprétation évolue.

## Autres informations contextuelles

Logiciels nécessaires pour lire et exécuter ce dépôt :

| Logiciel / bibliothèque | Version |
| --- | --- |
| Node.js | 20+ |
| Next.js | 16.3.2 |
| React / React DOM | 19.2.8 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| TanStack Query | 5.102.1 |
| Recharts | 3.10.1 |
| Base UI | 1.7.0 |
| Phosphor Icons | 2.1.10 |

Variable d’environnement obligatoire :

```bash
BACKEND_URL=https://votre-backend.example
```

Installation et lancement :

```bash
git clone https://github.com/CyrilPERIE/pmu-app.git
cd pmu-app
npm install
npm run dev
```

| Script | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | ESLint |

L’interface est prévue pour [http://localhost:3000](http://localhost:3000). Sans backend joignable, la page Récupération affiche une erreur de chargement ; le reste de la navigation reste accessible.

# APERCU DES DONNEES ET FICHIERS

## Convention de nommage des fichiers

- Répertoires en minuscules, séparateur tiret si besoin (`recuperation`, `page_summary.tsx`).
- Composants d’écran : `src/components/<domaine>/index.tsx`.
- Entités métier : `src/domain/entities/<nom>.ts`.
- Routes App Router : `src/app/<page>/page.tsx` (`recuperation`, `exploration`, `modelisation`, `resultats`).
- Notebooks publics : préfixe numérique + identifiant, en snake_case (`001_exploration.html`).
- Pipelines scraper : identifiants techniques avec underscores, affichés avec des espaces dans l’UI.

## Arborescence / plan de classement des fichiers

```
pmu-app/
├── public/
│   ├── images/                  # visuels d’interface
│   └── notebooks/
│       └── 001_exploration.html # rapport d’exploration
├── src/
│   ├── app/                     # pages et layout Next.js
│   ├── components/              # écrans métier
│   │   ├── recuperation/
│   │   ├── exploration/
│   │   ├── modelisation/
│   │   └── resultats/
│   ├── domain/
│   │   ├── entities/            # dictionnaire des objets métier
│   │   └── service/             # accès aux métriques backend
│   ├── lib/                     # client HTTP, formatage
│   └── ui/                      # composants d’interface
├── package.json
└── README.md
```

Les données tabulaires consommées par l’application ne sont pas versionnées dans ce dépôt : elles transitent par le backend (`GET /metrics/recuperation`).

# INFORMATIONS SPECIFIQUES AUX DONNEES POUR : GET /metrics/recuperation

Réponse JSON du backend, lue par `src/domain/service/metrics.ts`.

Séparateur décimal : **point**. Dates : ISO 8601 côté API, affichées en locale `fr-FR` dans l’interface.

## Liste des variables / entêtes de colonne

### Objet racine

| Nom | Nom lisible | Description | Unité / format | Valeurs autorisées |
| --- | --- | --- | --- | --- |
| `metrics` | Métriques | Liste des indicateurs de volume de la collecte | tableau d’objets `Metric` | non vide attendu |
| `scraper_logs` | Journaux de scraper | Historique des runs de pipelines | tableau d’objets `ScraperLog` | 0..n |
| `database_size` | Taille de la base | Volume occupé par la base de données | chaîne déjà formatée (ex. `12.3 GB`) | chaîne non vide |

### Objet `Metric`

| Nom | Nom lisible | Description | Unité / format | Valeurs autorisées |
| --- | --- | --- | --- | --- |
| `name` | Nom de la métrique | Identifiant métier, en français | texte | voir table des noms ci-dessous |
| `value` | Valeur | Payload dépendant du nom | objet | `{ value: number }` ou compteurs par pipeline |
| `type` | Type | Nature de l’indicateur | énumération | `count`, `table` |
| `created_at` | Créé le | Première apparition de la métrique | date-heure | ISO 8601 |
| `updated_at` | Mis à jour le | Dernier recalcul | date-heure | ISO 8601 |

### Noms de métriques (`name`)

| Nom | Description | Unité | Domaine |
| --- | --- | --- | --- |
| Nombre de programmes récupérés | Journées / programmes hippiques collectés | compte | entier ≥ 0 |
| Nombre de réunions récupérées | Réunions collectées | compte | entier ≥ 0 |
| Nombre de courses récupérées | Courses collectées | compte | entier ≥ 0 |
| Nombre de courses terminées | Courses dont la collecte est considérée comme achevée | compte | entier ≥ 0 |
| Nombre de courses en cours de récupération | Courses encore incomplètes | compte | entier ≥ 0 |
| Nombre de participants récupérés | Partants / chevaux engagés | compte | entier ≥ 0 |
| Nombre de combinaisons récupérées | Rapports / combinaisons de paris, tous types | compte | entier ≥ 0 |
| Nombre moyen de réunions par programme | Réunions / programme | moyenne | réel ≥ 0 |
| Nombre moyen de courses par programme | Courses / programme | moyenne | réel ≥ 0 |
| Nombre moyen de participants par course | Partants / course | moyenne | réel ≥ 0 |
| Nombre moyen de courses par jour | Courses / jour | moyenne | réel ≥ 0 |
| Année la plus ancienne des programmes | Borne inférieure temporelle de la collecte | année | entier (AAAA), attendu ≥ 2014 |
| Nombre de logs de scraper | Compteurs de runs par pipeline | objet | clés = nom de pipeline |

### Valeur de « Nombre de logs de scraper »

Objet indexé par nom de pipeline. Chaque entrée :

| Nom | Nom lisible | Description | Unité | Domaine |
| --- | --- | --- | --- | --- |
| `count` | Runs | Nombre total de runs de la pipeline | compte | entier ≥ 0 |
| `successes` | Succès | Runs terminés sans erreur | compte | entier ≥ 0 |
| `failures` | Échecs | Runs en échec | compte | entier ≥ 0 |
| `pending` | En cours | Runs encore actifs | compte | entier ≥ 0 |

## Code des valeurs manquantes

- Champ absent ou `undefined` : donnée non disponible (erreur réseau, backend injoignable, ou métrique non encore calculée).
- Tableaux vides : aucune observation pour la période / la pipeline.
- Aucun code sentinelle de type `-999` ou `NA` n’est utilisé.

## Informations additionnelles

Les quantités sont affichées de façon compacte dans l’interface (`1.2K`, `3.4M`). Les valeurs brutes restent des nombres côté API.

# INFORMATIONS SPECIFIQUES AUX DONNEES POUR : scraper_logs

Journal des exécutions de pipelines, affiché dans le tableau de la page Récupération.

## Liste des variables / entêtes de colonne

| Nom API | Entête UI | Nom lisible | Description | Unité / format | Valeurs autorisées |
| --- | --- | --- | --- | --- | --- |
| `id` | RUN | Identifiant du run | Clé du run ; préfixée `run_` à l’affichage | texte | non vide |
| `scraper` | PIPELINE | Pipeline | Nom technique du scraper | texte | identifiant underscore |
| `start_time` | DÉBUT | Début | Instant de démarrage | date-heure | ISO 8601 ; heure locale à l’affichage |
| `end_time` | — | Fin | Instant de fin, si le run est clos | date-heure | ISO 8601 ou absent |
| `duration` | DURÉE | Durée | Temps d’exécution | secondes, 2 décimales | réel ≥ 0 ou absent |
| `status` | STATUT | Statut | État du run | énumération | API : `completed`, `failed`, ou autre ; UI : Terminé, Échec, En cours |

## Code des valeurs manquantes

- `end_time` et `duration` absents tant que le run n’est pas terminé.
- Durée affichée `—` lorsque `duration` est manquante.
- Liste vide : message « Pas de données disponibles ».

## Informations additionnelles

Le statut des pipelines de l’en-tête de page est déduit du **dernier** log (tri par `end_time` décroissant) : `RUNNING` → récupération en cours ; `FAILED` → pipelines éteintes ; sinon pipelines actives.

# INFORMATIONS SPECIFIQUES AUX DONNEES POUR : public/notebooks/001_exploration.html

Rapport HTML d’exploration qualitative de la base (panorama puis faisabilité d’un modèle). Identifiant interne : `001_Exploration`.

## Liste des variables / entêtes de colonne

Le notebook n’est pas un fichier tabulaire. Il documente les familles d’objets suivantes, telles qu’observées dans la base collectée :

| Famille | Description | Exemples de dimensions |
| --- | --- | --- |
| Journées de courses | Dates du calendrier hippique | rythme hebdomadaire et annuel, volumes moyens |
| Réunions | Cadre d’une session (lieu, moment) | pays, hippodrome, météo, famille (trot, galop, obstacle) |
| Courses | Épreuves | discipline, distance, dotation, horaire, terrain |
| Chevaux engagés | Partants | effectifs par course / par jour |
| Rapports de paris | Cotes et combinaisons | nombre de rapports par course, types de paris |

## Code des valeurs manquantes

Le rapport distingue explicitement **ce qui est complet et ce qui ne l’est pas** (ex. météo renseignée seulement pour une partie des réunions françaises). Les trous de collecte sont décrits dans le chapitre correspondant, pas par un code unique.

## Informations additionnelles

Lecture dans l’interface (page Exploration) ou ouverture directe du fichier HTML. Les pages Modélisation et Résultats n’ont pas encore de livrable de données associé.
