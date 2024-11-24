// script.js

let compteur = 0;

// Fonction pour incrémenter le compteur et jouer le son
function incrementer() {
    // Incrémenter le compteur
    compteur++;
    // Mettre à jour l'affichage du compteur
    document.getElementById("compteur").textContent = compteur;

    // Créer un objet Audio pour jouer un son à chaque clic
    let audio = new Audio('slurp.mp3');
    audio.play();
}
