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
    
    // Changer l'image à chaque clic
    if (imageActuelle === 'cat.jpeg') {
        document.getElementById("clikcat").src = 'slurp.jpeg'; // Remplacer par la nouvelle image
        imageActuelle = 'slurp.jpeg'; // Mettre à jour l'image actuelle
    } else {
        document.getElementById("clikcat").src = 'cat.jpeg'; // Revenir à l'image initiale
        imageActuelle = 'cat.jpeg'; // Revenir à l'image initiale
    }
}
