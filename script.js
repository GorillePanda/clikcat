// script.js

let compteur = 0;

// Fonction pour incrémenter le compteur et jouer le son
function pop() {
    // Incrémenter le compteur
    compteur++;
    // Mettre à jour l'affichage du compteur
    document.getElementById("compteur").textContent = compteur;
    // Changer l'image quand le clic est enfoncé
    document.getElementById("clikcat").src = 'slurp.jpeg';
    // Créer un objet Audio pour jouer un son à chaque clic
    let audio = new Audio('slurp.mp3');
    audio.play();
}
function depop() {
    // Changer l'image quand le clic est enfoncé
    document.getElementById("clikcat").src = 'cat.jpeg';
}
