window.onload = function() {
    const date = new Date();
    const heure = date.getHours();
    const message = document.getElementById('messageBienvenue');

    if (heure < 12) {
        message.textContent = 'Bonjour ! Bienvenue sur mon site.';
    } else if (heure < 18) {
        message.textContent = 'Bonne après-midi ! Bienvenue sur mon site.';
    } else {
        message.textContent = 'Bonsoir ! Bienvenue sur mon site.';
    }
};





document.addEventListener('DOMContentLoaded', function() {
    const bullesContainer = document.getElementById('bulles');

    function creerBulle() {
        const bulle = document.createElement('div');
        bulle.classList.add('bulle');

        // Taille aléatoire entre 10 et 100 pixels
        const taille = Math.random() * 90 + 10;
        bulle.style.width = `${taille}px`;
        bulle.style.height = `${taille}px`;

        // Position aléatoire sur la largeur de l'écran
        bulle.style.left = `${Math.random() * 100}vw`;

        // Position initiale en bas de l'écran
        bulle.style.bottom = `-${taille}px`;

        // Durée d'animation aléatoire entre 4 et 8 secondes
        bulle.style.animationDuration = `${Math.random() * 4 + 4}s`;

        // Ajout d'un gestionnaire d'événements pour le clic sur la bulle
        bulle.addEventListener('click', function() {
            bulle.remove(); // Supprime la bulle du DOM
        });

        bullesContainer.appendChild(bulle);

        // Supprimer la bulle après l'animation pour éviter la surcharge du DOM
        setTimeout(() => {
            bulle.remove();
        }, 8000);
    }

    // Créer une nouvelle bulle toutes les 1 seconde
    setInterval(creerBulle, 1000);
});




function changerCouleur() {
    // Générer une couleur aléatoire
    const couleurFond = couleurAleatoire();

    // Appliquer les couleurs au body
    document.body.style.backgroundColor = couleurFond;
}

function couleurAleatoire() {
    // Générer une couleur hexadécimale aléatoire
    const lettres = '0123456789ABCDEF';
    let couleur = '#';
    for (let i = 0; i < 6; i++) {
        couleur += lettres[Math.floor(Math.random() * 16)];
    }
    return couleur;
}




const noBtn = document.getElementById('no-btn');

noBtn.addEventListener('mouseover', () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;
  const x = Math.floor(Math.random() * 250) - 200;
  const y = Math.floor(Math.random() * 250) - 200;
  noBtn.style.position = 'absolute';
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById('yes-btn').addEventListener('click', () => {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });
});

