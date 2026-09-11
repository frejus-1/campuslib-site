# CampusLib — Site vitrine

🔗 **Site en ligne :** https://frejus-1.github.io/campuslib-site/

## Description

CampusLib est un site vitrine pour une bibliothèque universitaire. Il présente la bibliothèque, son catalogue de livres et permet aux étudiants de consulter les informations pratiques et un formulaire de contact.

## Technologies

* HTML5 sémantique
* CSS3 (variables, Flexbox, Grid, media queries)
* Git
* GitHub
* GitHub Pages

## Structure du projet

```text
campuslib-site/
├── index.html
├── catalogue.html
├── contact.html
├── css/
│   └── style.css
├── img/
│   └── (images)
└── README.md
```

## Ce que j'ai appris

J'ai appris à structurer une page avec les balises sémantiques HTML5.

J'ai appris à utiliser Flexbox et CSS Grid pour organiser les éléments d'une page.

J'ai appris à utiliser les variables CSS pour centraliser les couleurs et les espacements.

J'ai appris à créer des branches Git, effectuer des fusions et résoudre un conflit.

J'ai appris à publier un projet sur GitHub et à le déployer avec GitHub Pages.

## Réponses aux questions du TP

### Question A.1

Si un fichier est ajouté au `.gitignore` après avoir déjà été committé, Git continue de le suivre car il est déjà versionné. Pour corriger la situation, il faut retirer le fichier du suivi avec `git rm --cached <fichier>`, puis effectuer un nouveau commit.

### Question B.1

Une `<section>` sert à regrouper une partie thématique d'une page, tandis qu'un `<article>` représente un contenu autonome qui peut être compris indépendamment du reste de la page.

Dans la page catalogue, la `<section>` regroupe les livres du catalogue et chaque livre est présenté dans un `<article class="livre-card">`.

### Question C.1

L'expression `repeat(auto-fit, minmax(240px, 1fr))` permet de créer une grille responsive. Chaque colonne possède une largeur minimale de 240 pixels et peut s'agrandir pour occuper l'espace disponible.

Avec `auto-fit`, les colonnes vides sont supprimées et les colonnes restantes peuvent s'étendre. Avec `auto-fill`, les pistes disponibles sont conservées même lorsqu'elles sont vides.

### Question D.1

Dans notre cas, le merge doit normalement être un `fast-forward` lorsque la branche `main` n'a reçu aucun nouveau commit depuis la création de `feature/mode-sombre`. Git peut alors simplement déplacer le pointeur de `main` vers le dernier commit de la branche, sans créer de commit de fusion.

### Question D.2

Contenu du fichier `index.html` en conflit avant résolution :

```text
<<<<<<< HEAD
<h1>Bienvenue à la bibliothèque du campus</h1>
=======
<h1>CampusLib — votre bibliothèque universitaire</h1>
>>>>>>> experiment/titre
```

`HEAD` représente la version de la branche actuellement active au moment du conflit. Dans notre cas, nous étions sur la branche `main`, donc `HEAD` représente la version de `main`.
