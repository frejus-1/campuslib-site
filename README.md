# CampusLib — Bibliothèque universitaire

**Projet de développement web — Licence 2 SIL**

**Site en ligne :** https://frejus-1.github.io/campuslib-site/

**Dépôt GitHub :** https://github.com/frejus-1/campuslib-site

## 1. Présentation du projet

CampusLib est une application web destinée à faciliter la consultation d'une bibliothèque universitaire.

Le projet permet aux étudiants de consulter un catalogue de livres, de rechercher des ouvrages, de filtrer les livres selon leur disponibilité et leur catégorie, de consulter les détails d'un ouvrage et d'effectuer une demande d'emprunt.

L'application propose également un système de création de compte et de connexion ainsi qu'un espace personnel permettant de consulter les informations liées aux emprunts.

Le projet a été réalisé progressivement en utilisant HTML5, CSS3, JavaScript, Git et GitHub.

## 2. Objectifs du projet

Les principaux objectifs de CampusLib sont :

* présenter une bibliothèque universitaire de manière moderne ;
* permettre la consultation d'un catalogue de livres ;
* faciliter la recherche d'un livre ;
* filtrer les livres selon leur catégorie et leur disponibilité ;
* afficher les informations détaillées des ouvrages ;
* proposer une interface responsive adaptée aux ordinateurs, tablettes et smartphones ;
* permettre la création d'un compte utilisateur ;
* permettre la connexion et la déconnexion ;
* permettre à un utilisateur connecté d'effectuer un emprunt ;
* afficher les informations relatives au compte utilisateur ;
* mettre en pratique les notions de HTML, CSS, JavaScript et Git ;
* déployer le site sur GitHub Pages.

## 3. Fonctionnalités

### 3.1 Accueil

La page d'accueil présente CampusLib et les principaux services proposés par la bibliothèque.

Elle permet notamment d'accéder rapidement au catalogue et aux autres parties du site.

### 3.2 Catalogue

La page `catalogue.html` présente les différents ouvrages disponibles dans la bibliothèque.

Chaque livre est présenté sous la forme d'une carte contenant notamment :

* une image ;
* le titre ;
* l'auteur ;
* la catégorie ;
* la date de publication ;
* la disponibilité ;
* un bouton permettant de consulter les détails ;
* un bouton permettant d'effectuer un emprunt.

Le catalogue dispose également d'un système de recherche et de filtres.

### 3.3 Recherche et filtrage

JavaScript permet de rechercher un livre à partir de son titre ou de son auteur.

Les ouvrages peuvent également être filtrés selon :

* leur catégorie ;
* leur disponibilité.

Le nombre de résultats affichés est également actualisé selon les recherches et les filtres appliqués.

### 3.4 Consultation des détails

Un utilisateur peut consulter davantage d'informations sur un ouvrage grâce au bouton de détails présent sur les cartes du catalogue.

### 3.5 Création de compte

La page `inscription.html` permet à un nouvel utilisateur de créer un compte.

Les informations du compte sont utilisées par le système frontend pour gérer la connexion et les emprunts.

### 3.6 Connexion

La page `connexion.html` permet à un utilisateur enregistré de se connecter.

Une fois connecté, l'interface peut afficher les fonctionnalités liées au compte utilisateur.

### 3.7 Gestion du compte

La page `compte.html` constitue l'espace personnel de l'utilisateur.

Elle permet notamment de consulter les informations du compte et l'historique des emprunts.

### 3.8 Emprunt

L'emprunt d'un livre est associé à l'utilisateur connecté.

Lorsqu'un utilisateur n'est pas connecté, l'application peut l'orienter vers la connexion ou l'inscription avant de lui permettre d'effectuer un emprunt.

### 3.9 Menu responsive

Le site possède un menu de navigation adapté aux petits écrans.

Sur mobile, la navigation peut être ouverte et fermée à l'aide du bouton de menu.

### 3.10 Mode sombre

Le site propose également un changement de thème permettant de passer d'une apparence claire à une apparence sombre.

Le choix du thème est conservé dans le navigateur.

## 4. Technologies utilisées

### HTML5

HTML5 est utilisé pour structurer les différentes pages du site avec des éléments sémantiques tels que :

* `header`
* `nav`
* `main`
* `section`
* `article`
* `footer`
* `form`

### CSS3

CSS3 est utilisé pour la mise en forme et la présentation du site.

Le projet utilise notamment :

* les variables CSS ;
* Flexbox ;
* CSS Grid ;
* les media queries ;
* les transitions ;
* les animations ;
* le responsive design ;
* les différents styles pour le thème clair et sombre.

La grille du catalogue utilise notamment une structure responsive basée sur `auto-fit` et `minmax()`.

### JavaScript

JavaScript permet d'ajouter de l'interactivité au site.

Il est utilisé notamment pour :

* le menu mobile ;
* le changement de thème ;
* les animations ;
* la recherche ;
* les filtres du catalogue ;
* l'affichage des détails ;
* l'inscription ;
* la connexion ;
* la déconnexion ;
* la gestion du compte ;
* la gestion des emprunts.

Les données de démonstration liées aux comptes et aux emprunts sont actuellement gérées côté navigateur.

### Git

Git est utilisé pour assurer le suivi des différentes versions du projet.

Le projet contient notamment des commits correspondant :

* à la création de la structure ;
* à la mise en place du HTML ;
* à la création de la charte graphique ;
* à la création de la grille du catalogue ;
* à l'adaptation responsive ;
* au mode sombre ;
* aux corrections HTML ;
* à la gestion d'un conflit Git ;
* à l'ajout des fonctionnalités JavaScript ;
* à l'ajout des pages de compte et d'authentification ;
* à la documentation du projet.

### GitHub

GitHub est utilisé pour héberger le dépôt et conserver l'historique du développement.

### GitHub Pages

Le projet est déployé avec GitHub Pages et est accessible en ligne à l'adresse :

https://frejus-1.github.io/campuslib-site/

## 5. Structure du projet

```text
campuslib-site/
│
├── index.html
├── catalogue.html
├── contact.html
├── connexion.html
├── inscription.html
├── compte.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── img/
│   ├── algorithmes.png
│   ├── livre1.png
│   ├── livre2.png
│   ├── livre3.png
│   ├── livre4.png
│   ├── livre5.png
│   └── livre6.png
│
├── .gitignore
└── README.md
```

## 6. Organisation des pages

### `index.html`

Page d'accueil de CampusLib.

### `catalogue.html`

Page permettant de consulter, rechercher et filtrer les livres.

### `contact.html`

Page contenant les informations de contact et le formulaire permettant de contacter la bibliothèque.

### `connexion.html`

Page de connexion des utilisateurs.

### `inscription.html`

Page de création d'un compte utilisateur.

### `compte.html`

Espace personnel permettant de consulter les informations liées au compte et aux emprunts.

### `css/style.css`

Fichier principal contenant les règles CSS utilisées par l'ensemble du site.

### `js/script.js`

Fichier JavaScript principal contenant les fonctionnalités interactives du site.

### `img/`

Dossier contenant les images utilisées pour illustrer les ouvrages et les différentes parties du site.

## 7. Responsive design

Le site a été conçu pour fonctionner sur différentes tailles d'écran.

Des media queries permettent d'adapter :

* la navigation ;
* les cartes de livres ;
* les grilles ;
* les espacements ;
* les boutons ;
* les formulaires ;
* les éléments de l'en-tête.

Sur mobile, le menu principal est remplacé par un bouton permettant d'afficher ou de masquer la navigation.

## 8. Gestion du projet avec Git

Le développement du projet a été réalisé progressivement avec Git.

Plusieurs commits ont permis de conserver l'évolution du projet.

Le dépôt contient actuellement **19 commits**.

Une branche expérimentale a également été utilisée afin de modifier le titre de la page.

Cette modification a conduit à un conflit lors de la fusion avec `main`. Le conflit a ensuite été résolu manuellement avant de finaliser la fusion.

Cette étape a permis de mettre en pratique :

* la création d'une branche ;
* la modification indépendante du code ;
* la fusion (`merge`) ;
* l'identification d'un conflit ;
* la résolution d'un conflit ;
* la création d'un commit de résolution.

## 9. Questions du TP

### Question A.1

Si un fichier est ajouté au `.gitignore` après avoir déjà été committé, Git continue de le suivre car il est déjà présent dans l'index et dans l'historique.

Pour arrêter son suivi, il faut utiliser :

```bash
git rm --cached <fichier>
```

puis effectuer un nouveau commit.

### Question B.1

Une `<section>` permet de regrouper une partie thématique d'une page.

Un `<article>` représente quant à lui un contenu autonome qui peut être compris indépendamment du reste de la page.

Dans `catalogue.html`, une section regroupe les livres du catalogue et chaque livre est représenté par un élément `article`.

### Question C.1

L'expression :

```css
repeat(auto-fit, minmax(240px, 1fr))
```

permet de créer une grille responsive.

`minmax(240px, 1fr)` indique que chaque colonne doit avoir une largeur minimale de 240 pixels et peut ensuite s'agrandir pour occuper l'espace disponible.

`auto-fit` adapte automatiquement le nombre de colonnes à la largeur disponible.

### Question D.1

Un merge peut être réalisé en `fast-forward` lorsque la branche `main` n'a pas reçu de nouveau commit depuis la création de la branche à fusionner.

Dans cette situation, Git peut simplement déplacer le pointeur de `main` vers le dernier commit de la branche sans créer de commit de fusion.

### Question D.2

Lorsqu'un conflit apparaît pendant une fusion, Git ajoute des marqueurs dans le fichier concerné :

```text
<<<<<<< HEAD
version de la branche actuelle
=======
version de l'autre branche
>>>>>>> nom-de-la-branche
```

`HEAD` représente la branche actuellement active au moment du conflit.

La résolution consiste à choisir ou combiner les modifications souhaitées, supprimer les marqueurs de conflit, puis valider la résolution avec un nouveau commit.

## 10. Tests et validation

Le projet a été testé sur différentes tailles d'écran afin de vérifier son comportement responsive.

Les principales fonctionnalités testées sont :

* navigation entre les pages ;
* affichage du catalogue ;
* recherche ;
* filtrage ;
* affichage des détails ;
* menu mobile ;
* changement de thème ;
* inscription ;
* connexion ;
* déconnexion ;
* accès au compte ;
* gestion des emprunts.

La structure HTML a également été corrigée au cours du développement afin de respecter les règles de validation HTML.

## 11. Limites actuelles

CampusLib est actuellement une application frontend.

Les comptes utilisateurs et les données liées aux emprunts sont gérés côté navigateur pour permettre une démonstration des fonctionnalités.

Cette solution ne constitue donc pas un véritable système d'authentification sécurisé pour une utilisation en production.

Une version complète pourrait utiliser :

* un backend Laravel ;
* une base de données MySQL ;
* une authentification sécurisée ;
* une API ;
* une gestion réelle des utilisateurs ;
* une gestion persistante des livres et des emprunts.

## 12. Améliorations possibles

Plusieurs évolutions pourraient être ajoutées au projet :

* créer un backend Laravel ;
* utiliser une base de données MySQL ;
* mettre en place une authentification sécurisée ;
* créer un espace administrateur ;
* permettre aux administrateurs d'ajouter, modifier et supprimer des livres ;
* gérer les utilisateurs ;
* gérer les emprunts et les retours ;
* ajouter des dates limites d'emprunt ;
* ajouter des notifications ;
* enregistrer les données sur un serveur ;
* améliorer davantage l'accessibilité ;
* ajouter des tests automatisés.

## 13. Compétences acquises

La réalisation de CampusLib a permis de développer des compétences dans plusieurs domaines :

* structuration d'une page avec HTML5 ;
* utilisation des éléments HTML sémantiques ;
* création de formulaires ;
* utilisation de CSS3 ;
* création d'interfaces responsive ;
* utilisation de Flexbox ;
* utilisation de CSS Grid ;
* utilisation des variables CSS ;
* création d'animations et de transitions ;
* manipulation du DOM avec JavaScript ;
* gestion des événements JavaScript ;
* utilisation du stockage local du navigateur ;
* gestion de versions avec Git ;
* création et fusion de branches ;
* résolution de conflits Git ;
* utilisation de GitHub ;
* déploiement avec GitHub Pages.

## 14. Conclusion

CampusLib a permis de mettre en pratique les principales notions du développement web frontend étudiées durant le projet.

Le projet a progressivement évolué d'un simple site vitrine vers une interface web interactive proposant un catalogue, une recherche, des filtres, un système de compte et une gestion des emprunts côté frontend.

Le projet constitue également une base pouvant être développée vers une véritable application full-stack en ajoutant un backend, une base de données et une authentification sécurisée.
