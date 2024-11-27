const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

const counterFile = 'counter.json';

// Fonction pour lire le compteur
function readCounter() {
    if (!fs.existsSync(counterFile)) {
        fs.writeFileSync(counterFile, JSON.stringify({ count: 0 }));
    }
    const data = fs.readFileSync(counterFile, 'utf8');
    return JSON.parse(data).count;
}

// Fonction pour écrire le compteur
function writeCounter(count) {
    fs.writeFileSync(counterFile, JSON.stringify({ count }));
}

// Route pour récupérer le compteur
app.get('/get-counter', (req, res) => {
    const count = readCounter();
    res.json({ count });
});

// Route pour mettre à jour le compteur
app.post('/update-counter', (req, res) => {
    let count = readCounter();
    count += 1;
    writeCounter(count);
    res.json({ count });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
