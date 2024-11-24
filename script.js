// script.js

// Récupérer le compteur de clics depuis le localStorage (s'il existe), sinon initialiser à 0
let compteur = parseInt(localStorage.getItem('compteur')) || 0;

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
   // Récupérer le compteur global au chargement de la page
    fetch('/api/compteur')
        .then(response => response.json())
        .then(data => {
        // Afficher le compteur global sur la page
        document.getElementById("compteurGlobal").textContent = data.totalClics;
    })
    .catch(err => console.error("Erreur lors de la récupération du compteur global", err));
function depop() {
    // Changer l'image quand le clic est relâché
    document.getElementById("clikcat").src = 'cat.jpeg';
}
// Récupérer le compteur global au chargement de la page
fetch('/api/compteur')
    .then(response => response.json())
    .then(data => {
        // Afficher le compteur global sur la page
        document.getElementById("compteurGlobal").textContent = data.totalClics;
    })
    .catch(err => console.error("Erreur lors de la récupération du compteur global", err));
