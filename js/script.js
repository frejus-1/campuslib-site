// ================================
// CAMPUSLIB - JAVASCRIPT
// ================================


// ================================
// MENU MOBILE
// ================================

const menuToggle =
    document.querySelector(".menu-toggle");

const siteNav =
    document.querySelector(".site-nav");


if (menuToggle && siteNav) {

    menuToggle.addEventListener(
        "click",
        function () {

            siteNav.classList.toggle(
                "menu-ouvert"
            );

        }
    );

}


// Fermer le menu après avoir cliqué
// sur un lien

const liensMenu =
    document.querySelectorAll(
        ".site-nav a"
    );


liensMenu.forEach(function (lien) {

    lien.addEventListener(
        "click",
        function () {

            if (siteNav) {

                siteNav.classList.remove(
                    "menu-ouvert"
                );

            }

        }
    );

});


// ================================
// MODE CLAIR / SOMBRE
// ================================

const themeToggle =
    document.querySelector(".theme-toggle");

const themeIcon =
    document.querySelector(".theme-icon");


// Fonction pour appliquer le thème

function appliquerTheme(theme) {

    if (theme === "sombre") {

        document.body.classList.add(
            "theme-sombre"
        );

        if (themeIcon) {

            themeIcon.textContent = "☀";

        }

    } else {

        document.body.classList.remove(
            "theme-sombre"
        );

        if (themeIcon) {

            themeIcon.textContent = "☾";

        }

    }

}


// Récupérer le thème enregistré

const themeSauvegarde =
    localStorage.getItem(
        "campuslib_theme"
    );


// Appliquer le thème au chargement

if (themeSauvegarde) {

    appliquerTheme(themeSauvegarde);

} else {

    appliquerTheme("clair");

}


// Changer le thème

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            const modeSombre =
                document.body.classList.contains(
                    "theme-sombre"
                );


            if (modeSombre) {

                appliquerTheme("clair");

                localStorage.setItem(
                    "campuslib_theme",
                    "clair"
                );

            } else {

                appliquerTheme("sombre");

                localStorage.setItem(
                    "campuslib_theme",
                    "sombre"
                );

            }

        }
    );

}


// ================================
// ANIMATION AU DÉFILEMENT
// ================================

if ("IntersectionObserver" in window) {

    const elements =
        document.querySelectorAll(
            ".livre-card, .statistique, .section-apropos > div"
        );


    const observer =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "element-visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(
        function (element) {

            observer.observe(element);

        }
    );

}


// ================================
// ANIMATION DES STATISTIQUES
// ================================

const statistiques =
    document.querySelectorAll(
        ".statistique strong"
    );


statistiques.forEach(
    function (statistique) {

        const texteOriginal =
            statistique.textContent.trim();


        const nombre =
            parseInt(texteOriginal);


        if (
            !isNaN(nombre) &&
            !texteOriginal.includes("/")
        ) {

            let compteur = 0;


            const duree = 1200;

            const intervalle = 30;

            const increment =
                nombre /
                (duree / intervalle);


            const compteurAnimation =
                setInterval(
                    function () {

                        compteur += increment;


                        if (
                            compteur >= nombre
                        ) {

                            compteur = nombre;

                            clearInterval(
                                compteurAnimation
                            );

                        }


                        statistique.textContent =
                            Math.floor(compteur) +
                            texteOriginal.replace(
                                nombre,
                                ""
                            );

                    },
                    intervalle
                );

        }

    }
);


// ================================
// CATALOGUE
// ================================

const rechercheLivre =
    document.querySelector(
        "#recherche-livre"
    );


const cartesLivres =
    document.querySelectorAll(
        ".livre-card[data-categorie]"
    );


const boutonsCategorie =
    document.querySelectorAll(
        ".filtre:not(.filtre-disponibilite) [data-categorie]"
    );


const boutonsDisponibilite =
    document.querySelectorAll(
        ".filtre-disponibilite [data-disponibilite]"
    );


const nombreLivres =
    document.querySelector(
        "#nombre-livres"
    );


const aucunResultat =
    document.querySelector(
        ".aucun-resultat"
    );


let categorieActuelle =
    "toutes";


let disponibiliteActuelle =
    "toutes";


// ================================
// FILTRER LES LIVRES
// ================================

function filtrerLivres() {

    const recherche =
        rechercheLivre
            ? rechercheLivre.value
                .toLowerCase()
                .trim()
            : "";


    let nombreResultats = 0;


    cartesLivres.forEach(
        function (livre) {

            const categorie =
                livre.dataset.categorie
                    .toLowerCase();


            const disponibilite =
                livre.dataset.disponibilite
                    .toLowerCase();


            const titre =
                livre.dataset.titre
                    .toLowerCase();


            const auteur =
                livre.dataset.auteur
                    .toLowerCase();


            const correspondCategorie =
                categorieActuelle === "toutes" ||
                categorie ===
                categorieActuelle.toLowerCase();


            const correspondDisponibilite =
                disponibiliteActuelle === "toutes" ||
                disponibilite ===
                disponibiliteActuelle.toLowerCase();


            const correspondRecherche =
                recherche === "" ||
                titre.includes(recherche) ||
                auteur.includes(recherche);


            const afficher =
                correspondCategorie &&
                correspondDisponibilite &&
                correspondRecherche;


            if (afficher) {

                livre.style.display = "";

                nombreResultats++;

            } else {

                livre.style.display = "none";

            }

        }
    );


    if (nombreLivres) {

        nombreLivres.textContent =
            nombreResultats;

    }


    if (aucunResultat) {

        aucunResultat.hidden =
            nombreResultats !== 0;

    }

}


// ================================
// FILTRE CATÉGORIE
// ================================

boutonsCategorie.forEach(
    function (bouton) {

        bouton.addEventListener(
            "click",
            function () {

                categorieActuelle =
                    bouton.dataset.categorie;


                boutonsCategorie.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "filtre-actif"
                        );

                    }
                );


                bouton.classList.add(
                    "filtre-actif"
                );


                filtrerLivres();

            }
        );

    }
);


// ================================
// FILTRE DISPONIBILITÉ
// ================================

boutonsDisponibilite.forEach(
    function (bouton) {

        bouton.addEventListener(
            "click",
            function () {

                disponibiliteActuelle =
                    bouton.dataset.disponibilite;


                boutonsDisponibilite.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "filtre-actif"
                        );

                    }
                );


                bouton.classList.add(
                    "filtre-actif"
                );


                filtrerLivres();

            }
        );

    }
);


// ================================
// RECHERCHE
// ================================

if (rechercheLivre) {

    rechercheLivre.addEventListener(
        "input",
        filtrerLivres
    );

}


// Filtrage initial

if (cartesLivres.length > 0) {

    filtrerLivres();

}


// ================================
// MODAL "VOIR PLUS"
// ================================

const boutonsDetails =
    document.querySelectorAll(
        ".bouton-details"
    );


const modalLivre =
    document.querySelector(
        "#modal-livre"
    );


const modalFermer =
    document.querySelector(
        "#modal-fermer"
    );


const modalImage =
    document.querySelector(
        "#modal-image"
    );


const modalTitre =
    document.querySelector(
        "#modal-titre"
    );


const modalAuteur =
    document.querySelector(
        "#modal-auteur"
    );


const modalCategorie =
    document.querySelector(
        "#modal-categorie"
    );


const modalAnnee =
    document.querySelector(
        "#modal-annee"
    );


const modalExemplaires =
    document.querySelector(
        "#modal-exemplaires"
    );


const modalDisponibilite =
    document.querySelector(
        "#modal-disponibilite"
    );


const modalEmprunter =
    document.querySelector(
        "#modal-emprunter"
    );


// Ouvrir le modal

boutonsDetails.forEach(
    function (bouton) {

        bouton.addEventListener(
            "click",
            function () {

                const carte =
                    bouton.closest(
                        ".livre-card"
                    );


                if (!carte) {
                    return;
                }


                const image =
                    carte.querySelector(
                        "img"
                    );


                const titre =
                    carte.querySelector(
                        "h3"
                    );


                const auteur =
                    carte.querySelector(
                        ".livre-auteur"
                    );


                const informations =
                    carte.querySelectorAll(
                        ".livre-informations p"
                    );


                const exemplaires =
                    carte.querySelector(
                        ".livre-exemplaires"
                    );


                const badge =
                    carte.querySelector(
                        ".badge-disponibilite"
                    );


                // Image

                if (
                    modalImage &&
                    image
                ) {

                    modalImage.src =
                        image.src;

                    modalImage.alt =
                        image.alt;

                }


                // Titre

                if (
                    modalTitre &&
                    titre
                ) {

                    modalTitre.textContent =
                        titre.textContent.trim();

                }


                // Auteur

                if (
                    modalAuteur &&
                    auteur
                ) {

                    modalAuteur.textContent =
                        auteur.textContent.trim();

                }


                // Catégorie

                if (
                    modalCategorie &&
                    informations[0]
                ) {

                    modalCategorie.textContent =
                        informations[0]
                            .textContent
                            .replace(
                                "Catégorie :",
                                ""
                            )
                            .trim();

                }


                // Année

                if (
                    modalAnnee &&
                    informations[1]
                ) {

                    modalAnnee.textContent =
                        informations[1]
                            .textContent
                            .replace(
                                "Année :",
                                ""
                            )
                            .trim();

                }


                // Exemplaires

                if (
                    modalExemplaires &&
                    exemplaires
                ) {

                    modalExemplaires.textContent =
                        exemplaires.textContent.trim();

                }


                // Disponibilité

                if (
                    modalDisponibilite &&
                    badge
                ) {

                    modalDisponibilite.textContent =
                        badge.textContent.trim();


                    modalDisponibilite.className =
                        "badge-disponibilite";


                    if (
                        carte.dataset.disponibilite ===
                        "disponible"
                    ) {

                        modalDisponibilite.classList.add(
                            "disponible"
                        );

                    } else {

                        modalDisponibilite.classList.add(
                            "indisponible"
                        );

                    }

                }


                // Bouton emprunter

                if (modalEmprunter) {

                    const disponible =
                        carte.dataset.disponibilite ===
                        "disponible";


                    modalEmprunter.disabled =
                        !disponible;


                    modalEmprunter.textContent =
                        disponible
                            ? "Emprunter"
                            : "Indisponible";

                }


                // Afficher

                if (modalLivre) {

                    modalLivre.hidden = false;

                    document.body.style.overflow =
                        "hidden";

                }

            }
        );

    }
);


// ================================
// FERMER LE MODAL
// ================================

function fermerModal() {

    if (!modalLivre) {
        return;
    }


    modalLivre.hidden = true;


    document.body.style.overflow =
        "";

}


if (modalFermer) {

    modalFermer.addEventListener(
        "click",
        fermerModal
    );

}


if (modalLivre) {

    modalLivre.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                modalLivre
            ) {

                fermerModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modalLivre &&
            !modalLivre.hidden
        ) {

            fermerModal();

        }

    }
);


// ================================
// INSCRIPTION
// ================================

const formInscription =
    document.querySelector(
        "#form-inscription"
    );


if (formInscription) {

    formInscription.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nom =
                document.querySelector(
                    "#inscription-nom"
                ).value.trim();


            const prenom =
                document.querySelector(
                    "#inscription-prenom"
                ).value.trim();


            const email =
                document.querySelector(
                    "#inscription-email"
                ).value
                    .trim()
                    .toLowerCase();


            const motDePasse =
                document.querySelector(
                    "#inscription-mot-de-passe"
                ).value;


            const confirmation =
                document.querySelector(
                    "#inscription-confirmation"
                ).value;


            const message =
                document.querySelector(
                    "#message-inscription"
                );


            // Vérifier les mots de passe

            if (
                motDePasse !==
                confirmation
            ) {

                if (message) {

                    message.textContent =
                        "Les mots de passe ne correspondent pas.";

                    message.className =
                        "message-auth message-erreur";

                }

                return;

            }


            // Récupérer les utilisateurs

            const utilisateurs =
                JSON.parse(
                    localStorage.getItem(
                        "campuslib_utilisateurs"
                    )
                ) || [];


            // Vérifier l'email

            const utilisateurExiste =
                utilisateurs.some(
                    function (utilisateur) {

                        return (
                            utilisateur.email ===
                            email
                        );

                    }
                );


            if (utilisateurExiste) {

                if (message) {

                    message.textContent =
                        "Un compte existe déjà avec cette adresse e-mail.";

                    message.className =
                        "message-auth message-erreur";

                }

                return;

            }


            // Créer le compte

            const nouvelUtilisateur = {

                nom: nom,

                prenom: prenom,

                email: email,

                motDePasse: motDePasse

            };


            utilisateurs.push(
                nouvelUtilisateur
            );


            localStorage.setItem(
                "campuslib_utilisateurs",
                JSON.stringify(
                    utilisateurs
                )
            );


            if (message) {

                message.textContent =
                    "Compte créé avec succès.";

                message.className =
                    "message-auth message-succes";

            }


            // Redirection

            setTimeout(
                function () {

                    window.location.href =
                        "connexion.html";

                },
                1200
            );

        }
    );

}


// ================================
// CONNEXION
// ================================

const formConnexion =
    document.querySelector(
        "#form-connexion"
    );


if (formConnexion) {

    formConnexion.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.querySelector(
                    "#connexion-email"
                ).value
                    .trim()
                    .toLowerCase();


            const motDePasse =
                document.querySelector(
                    "#connexion-mot-de-passe"
                ).value;


            const message =
                document.querySelector(
                    "#message-connexion"
                );


            const utilisateurs =
                JSON.parse(
                    localStorage.getItem(
                        "campuslib_utilisateurs"
                    )
                ) || [];


            const utilisateur =
                utilisateurs.find(
                    function (utilisateur) {

                        return (
                            utilisateur.email ===
                            email &&
                            utilisateur.motDePasse ===
                            motDePasse
                        );

                    }
                );


            if (!utilisateur) {

                if (message) {

                    message.textContent =
                        "Adresse e-mail ou mot de passe incorrect.";

                    message.className =
                        "message-auth message-erreur";

                }

                return;

            }


            // Créer la session

            localStorage.setItem(
                "campuslib_utilisateur_connecte",
                JSON.stringify(
                    utilisateur
                )
            );


            if (message) {

                message.textContent =
                    "Connexion réussie.";

                message.className =
                    "message-auth message-succes";

            }


            setTimeout(
                function () {

                    window.location.href =
                        "index.html";

                },
                1000
            );

        }
    );

}


// ================================
// MENU UTILISATEUR
// ================================

const menuConnexion =
    document.querySelector(
        "#menu-connexion"
    );


const menuInscription =
    document.querySelector(
        "#menu-inscription"
    );


const menuCompte =
    document.querySelector(
        "#menu-compte"
    );


const menuDeconnexion =
    document.querySelector(
        "#menu-deconnexion"
    );


const utilisateurConnecte =
    JSON.parse(
        localStorage.getItem(
            "campuslib_utilisateur_connecte"
        )
    );


// Utilisateur connecté

if (utilisateurConnecte) {

    if (menuConnexion) {

        menuConnexion.hidden =
            true;

    }


    if (menuInscription) {

        menuInscription.hidden =
            true;

    }


    if (menuCompte) {

        menuCompte.hidden =
            false;

    }


    if (menuDeconnexion) {

        menuDeconnexion.hidden =
            false;

    }

}


// Utilisateur non connecté

else {

    if (menuConnexion) {

        menuConnexion.hidden =
            false;

    }


    if (menuInscription) {

        menuInscription.hidden =
            false;

    }


    if (menuCompte) {

        menuCompte.hidden =
            true;

    }


    if (menuDeconnexion) {

        menuDeconnexion.hidden =
            true;

    }

}


// ================================
// DÉCONNEXION
// ================================

if (menuDeconnexion) {

    menuDeconnexion.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "campuslib_utilisateur_connecte"
            );


            window.location.href =
                "index.html";

        }
    );

}


// ================================
// PAGE MON COMPTE
// ================================

const profilNom =
    document.querySelector(
        "#profil-nom"
    );


const profilEmail =
    document.querySelector(
        "#profil-email"
    );


const profilInitiales =
    document.querySelector(
        "#profil-initiales"
    );


const boutonDeconnexionCompte =
    document.querySelector(
        "#bouton-deconnexion-compte"
    );


if (
    profilNom ||
    profilEmail ||
    profilInitiales
) {

    if (!utilisateurConnecte) {

        window.location.href =
            "connexion.html";

    } else {

        if (profilNom) {

            profilNom.textContent =
                utilisateurConnecte.prenom +
                " " +
                utilisateurConnecte.nom;

        }


        if (profilEmail) {

            profilEmail.textContent =
                utilisateurConnecte.email;

        }


        if (profilInitiales) {

            const initialePrenom =
                utilisateurConnecte.prenom
                    .charAt(0)
                    .toUpperCase();


            const initialeNom =
                utilisateurConnecte.nom
                    .charAt(0)
                    .toUpperCase();


            profilInitiales.textContent =
                initialePrenom +
                initialeNom;

        }

    }

}


// Déconnexion depuis la page compte

if (boutonDeconnexionCompte) {

    boutonDeconnexionCompte.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "campuslib_utilisateur_connecte"
            );


            window.location.href =
                "index.html";

        }
    );

}

// ================================
// MISE À JOUR DU MENU COMPTE
// ================================

const menuCompteActuel =
    document.querySelector("#menu-compte");

if (menuCompteActuel) {

    if (utilisateurConnecte) {

        menuCompteActuel.innerHTML = `
            <a href="compte.html">
                ${utilisateurConnecte.prenom}
            </a>
        `;

    } else {

        menuCompteActuel.innerHTML = `
            <a href="connexion.html">
                Connexion
            </a>
        `;

    }

}
// ==========================================
// EMPRUNT DIRECT DEPUIS UNE CARTE
// ==========================================

const boutonsEmprunter =
    document.querySelectorAll(".bouton-emprunter");


boutonsEmprunter.forEach((bouton) => {

    bouton.addEventListener("click", function () {

        // Vérifier si le bouton est désactivé
        if (bouton.disabled) {
            return;
        }


        // Vérifier si l'utilisateur est connecté
        const utilisateur =
            JSON.parse(
                localStorage.getItem(
                    "campuslib_utilisateur_connecte"
                )
            );


        if (!utilisateur) {

            alert(
                "Vous devez être connecté pour emprunter un livre."
            );

            window.location.href =
                "connexion.html";

            return;
        }


        // Récupérer la carte du livre
        const carte =
            bouton.closest(".livre-card");


        if (!carte) {
            return;
        }


        // ==========================================
        // RÉCUPÉRER LES INFORMATIONS DU LIVRE
        // ==========================================

        const titreElement =
            carte.querySelector("h3");

        const auteurElement =
            carte.querySelector(".livre-auteur");

        const categorieElement =
            carte.querySelector(".livre-informations p");


        // Titre
        const titre =
            carte.dataset.titre ||
            (
                titreElement
                    ? titreElement.textContent.trim()
                    : ""
            );


        // Auteur
        const auteur =
            carte.dataset.auteur ||
            (
                auteurElement
                    ? auteurElement.textContent.trim()
                    : ""
            );


        // Catégorie
        let categorie =
            carte.dataset.categorie || "";


        if (!categorie && categorieElement) {

            categorie =
                categorieElement.textContent
                    .replace("Catégorie :", "")
                    .trim();

        }


        // Vérifier que le titre existe
        if (!titre) {

            alert(
                "Impossible de récupérer les informations du livre."
            );

            return;
        }


        // ==========================================
        // RÉCUPÉRER LES EMPRUNTS EXISTANTS
        // ==========================================

        let emprunts =
            JSON.parse(
                localStorage.getItem(
                    "campuslib_emprunts"
                )
            ) || [];


        // ==========================================
        // VÉRIFIER SI LE LIVRE EST DÉJÀ EMPRUNTÉ
        // ==========================================

        const dejaEmprunte =
            emprunts.some(
                (emprunt) => {

                    return (
                        emprunt.email ===
                        utilisateur.email

                        &&

                        emprunt.titre ===
                        titre

                        &&

                        emprunt.statut ===
                        "En cours"
                    );

                }
            );


        if (dejaEmprunte) {

            alert(
                "Vous avez déjà emprunté ce livre."
            );

            return;
        }


        // ==========================================
        // CRÉER LE NOUVEL EMPRUNT
        // ==========================================

        const nouvelEmprunt = {

            email:
                utilisateur.email,

            titre:
                titre,

            auteur:
                auteur,

            categorie:
                categorie,

            date:
                new Date().toLocaleDateString(
                    "fr-FR"
                ),

            statut:
                "En cours"

        };


        // ==========================================
        // AJOUTER L'EMPRUNT
        // ==========================================

        emprunts.push(
            nouvelEmprunt
        );


        // ==========================================
        // ENREGISTRER DANS LOCALSTORAGE
        // ==========================================

        localStorage.setItem(
            "campuslib_emprunts",
            JSON.stringify(
                emprunts
            )
        );


        // ==========================================
        // MESSAGE DE CONFIRMATION
        // ==========================================

        alert(
            "Le livre « " +
            titre +
            " » a été emprunté avec succès."
        );


        // Désactiver le bouton
        bouton.disabled = true;

        bouton.textContent =
            "Déjà emprunté";

    });

});


// ==========================================
// AFFICHAGE DES EMPRUNTS DANS MON COMPTE
// ==========================================

const listeEmprunts =
    document.getElementById(
        "liste-emprunts"
    );


const nombreEmprunts =
    document.getElementById(
        "nombre-emprunts"
    );


if (
    listeEmprunts &&
    nombreEmprunts
) {

    const utilisateur =
        JSON.parse(
            localStorage.getItem(
                "campuslib_utilisateur_connecte"
            )
        );


    if (utilisateur) {

        const emprunts =
            JSON.parse(
                localStorage.getItem(
                    "campuslib_emprunts"
                )
            ) || [];


        // ==========================================
        // FILTRER LES EMPRUNTS DE L'UTILISATEUR
        // ==========================================

        const mesEmprunts =
            emprunts.filter(
                (emprunt) => {

                    return (
                        emprunt.email ===
                        utilisateur.email
                    );

                }
            );


        // ==========================================
        // NOMBRE D'EMPRUNTS
        // ==========================================

        nombreEmprunts.textContent =
            mesEmprunts.length;


        // ==========================================
        // AUCUN EMPRUNT
        // ==========================================

        if (
            mesEmprunts.length === 0
        ) {

            listeEmprunts.innerHTML = `

                <div class="aucun-emprunt">

                    <h3>
                        Aucun livre emprunté
                    </h3>

                    <p>
                        Vous n'avez actuellement aucun livre emprunté.
                    </p>

                    <a
                        href="catalogue.html"
                        class="bouton-principal"
                    >
                        Voir le catalogue
                    </a>

                </div>

            `;

        }


        // ==========================================
        // AFFICHER LES EMPRUNTS
        // ==========================================

        else {

            listeEmprunts.innerHTML =
                mesEmprunts
                    .map(
                        (emprunt) => {

                            return `

                                <div class="carte-emprunt">

                                    <div class="carte-emprunt-contenu">

                                        <p>
                                            <strong>
                                                Titre :
                                            </strong>

                                            ${emprunt.titre || "Non renseigné"}
                                        </p>


                                        <p>
                                            <strong>
                                                Auteur :
                                            </strong>

                                            ${emprunt.auteur || "Non renseigné"}
                                        </p>


                                        <p>
                                            <strong>
                                                Catégorie :
                                            </strong>

                                            ${emprunt.categorie || "Non renseignée"}
                                        </p>


                                        <p>
                                            <strong>
                                                Date d'emprunt :
                                            </strong>

                                            ${emprunt.date}
                                        </p>


                                        <p>
                                            <strong>
                                                Statut :
                                            </strong>

                                            <span class="statut-emprunt">
                                                ${emprunt.statut}
                                            </span>
                                        </p>

                                    </div>

                                </div>

                            `;

                        }
                    )
                    .join("");

        }

    }

}
// ================================
// FIN
// ================================

console.log(
    "CampusLib : JavaScript chargé."
);
