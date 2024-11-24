// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/clics', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connecté à MongoDB');
}).catch((err) => {
    console.log('Erreur de connexion à MongoDB:', err);
});

// Définir le modèle du compteur de clics
const compteurSchema = new mongoose.Schema({
    totalClics: { type: Number, default: 0 }
});

const Compteur = mongoose.model('Compteur', compteurSchema);

// Middleware pour analyser les corps de requêtes JSON
app.use(express.json());

// Récupérer le compteur global de clics
app.get('/api/compteur', async (req, res) => {
    try {
        const compteur = await Compteur.findOne();
        if (!compteur) {
            // Créer un compteur initial si aucun n'existe
            const newCompteur = new Compteur();
            await newCompteur.save();
            res.json({ totalClics: newCompteur.totalClics });
        } else {
            res.json({ totalClics: compteur.totalClics });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération du compteur' });
    }
});

// Mettre à jour le compteur global avec un nouveau clic
app.post('/api/compteur', async (req, res) => {
    try {
        const compteur = await Compteur.findOne();
        if (compteur) {
            compteur.totalClics += 1;
            await compteur.save();
            res.json({ totalClics: compteur.totalClics });
        } else {
            const newCompteur = new Compteur({ totalClics: 1 });
            await newCompteur.save();
            res.json({ totalClics: newCompteur.totalClics });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour du compteur' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
