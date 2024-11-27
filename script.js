// script.js

// Récupérer le compteur de clics depuis le localStorage (s'il existe), sinon initialiser à 0
let compteur = parseInt(localStorage.getItem('compteur')) || 0;
let compteur = parseInt(localStorage.getItem('compteur2')) || 0;

// Mettre à jour le compteur dans l'élément HTML dès le chargement de la page
document.getElementById("compteur").textContent = compteur;

// Fonction pour incrémenter le compteur et jouer le son
function pop() {
    // Incrémenter le compteur
    compteur++;
    // Mettre à jour l'affichage du compteur
    document.getElementById("compteur").textContent = compteur;
    // Sauvegarder le nouveau compteur dans le localStorage
    localStorage.setItem('compteur', compteur);
    // Changer l'image quand le clic est enfoncé
    document.getElementById("clikcat").src = 'slurp.jpeg';
    // Créer un objet Audio pour jouer un son à chaque clic
    let audio = new Audio('slurp.mp3');
    audio.play();
}
function depop() {
    // Changer l'image quand le clic est relâché
    document.getElementById("clikcat").src = 'cat.jpeg';
}

// URLs du backend
const GET_COUNTER_URL = '/get-counter';
const UPDATE_COUNTER_URL = '/update-counter';

// Sélection des éléments HTML
const localCounter = document.getElementById('compteur');
const globalCounter = document.getElementById('compteurGlobal');
const clickImage = document.getElementById('clikcat');

// Fonction pour charger le compteur global depuis le serveur
async function loadGlobalCounter() {
    try {
        const response = await fetch(GET_COUNTER_URL);
        if (!response.ok) throw new Error('Erreur lors de la récupération du compteur global');
        const data = await response.json();
        globalCounter.textContent = data.count; // Mise à jour du DOM
    } catch (error) {
        console.error('Erreur:', error);
        alert('Impossible de charger le compteur global.');
    }
}

// Fonction pour mettre à jour le compteur global
async function updateGlobalCounter() {
    try {
        const response = await fetch(UPDATE_COUNTER_URL, { method: 'POST' });
        if (!response.ok) throw new Error('Erreur lors de la mise à jour du compteur global');
        const data = await response.json();
        globalCounter.textContent = data.count; // Mise à jour du compteur global dans le DOM
    } catch (error) {
        console.error('Erreur:', error);
        alert('Impossible de mettre à jour le compteur global.');
    }
}

// Gestion des clics sur l'image
clickImage.addEventListener('click', () => {
    // Incrémentation du compteur local
    localClickCount += 1;
    localCounter.textContent = localClickCount;

    // Mise à jour du compteur global
    updateGlobalCounter();
});

// Charger le compteur global au démarrage
loadGlobalCounter();
