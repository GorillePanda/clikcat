// script.js

let compteur = 0;
let imageActuelle = 'cat.jpeg'; // Image initiale

// Fonction pour incrémenter le compteur et jouer le son, et changer l'image
function incrementer() {
    // Incrémenter le compteur
    compteur++;
    // Mettre à jour l'affichage du compteur
    document.getElementById("compteur").textContent = compteur;

    // Créer un objet Audio pour jouer un son à chaque clic
    let audio = new Audio('slurp.mp3');
    audio.play();
    
   // Fonction pour changer l'image en fonction de l'état du clic
function changerImage() {
    // Incrémenter le compteur lorsque l'utilisateur maintient le clic
    if (true) {
        compteur++;
        document.getElementById("compteur").textContent = compteur;
        // Changer l'image quand le clic est enfoncé
        document.getElementById("clikcat").src = 'slurp.jpeg';
    } else {
        // Revenir à l'image d'origine lorsque le clic est relâché
        document.getElementById("clikcat").src = 'cat.jpeg';
    }
}
