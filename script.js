// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle'); // L'ID du bouton que nous allons ajouter
    const body = document.body;

    // TODO: Définir la classe CSS à basculer pour le mode sombre
    const DARK_MODE_CLASS = 'dark-mode';
    // TODO: Définir la clé pour stocker la préférence de l'utilisateur dans le localStorage
    const STORAGE_KEY = 'darkModeEnabled';

    // Fonction pour appliquer le mode sombre
    const enableDarkMode = () => {
        body.classList.add(DARK_MODE_CLASS);
        localStorage.setItem(STORAGE_KEY, 'true');
        // TODO: Mettre à jour l'icône du toggle si des icônes différentes sont utilisées pour chaque mode (ex: lune/soleil)
        if (toggleButton) {
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Icône soleil pour désactiver le mode sombre
        }
    };

    // Fonction pour désactiver le mode sombre
    const disableDarkMode = () => {
        body.classList.remove(DARK_MODE_CLASS);
        localStorage.setItem(STORAGE_KEY, 'false');
        // TODO: Mettre à jour l'icône du toggle si des icônes différentes sont utilisées pour chaque mode
        if (toggleButton) {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Icône lune pour activer le mode sombre
        }
    };

    // Vérifie la préférence de l'utilisateur au chargement de la page
    const storedPreference = localStorage.getItem(STORAGE_KEY);
    if (storedPreference === 'true') {
        enableDarkMode();
    } else {
        disableDarkMode(); // S'assurer que le mode clair est appliqué si aucune préférence ou 'false'
    }

    // Ajoute l'écouteur d'événement au bouton de toggle
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (body.classList.contains(DARK_MODE_CLASS)) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    } else {
        console.warn("L'élément avec l'ID 'darkModeToggle' n'a pas été trouvé. Le toggle dark mode ne fonctionnera pas.");
    }
});