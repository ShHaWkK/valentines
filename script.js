let noClicks = 1;
const maxNoClicks = 4;
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1;
const gifElement = document.getElementById("togepi-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

// Array de gifs
const gifs = [
    "assets/images/togepi-happy.gif",
    "assets/images/togepi-sad-1.gif",
    "assets/images/togepi-sad-2.gif",
    "assets/images/togepi-crying.gif"
];

// Array de messages
const buttonMessages = [
    "Are you sure??",
    "Pookie please",
    "Pookie PLEASE",
    "You can't do this to me!"
];

// Fonction pour faire bouger le bouton "No"
noButton.addEventListener("mouseover", () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Quand on clique sur "Non"
noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        gifElement.src = gifs[noClicks];
    }

    // Changer le texte du bouton "Non"
    noButton.textContent = buttonMessages[noClicks % maxNoClicks];
    noButton.style.width = "auto";
    noButton.style.width = `${noButton.scrollWidth}px`;

    // Réduire la taille du bouton "Non"
    if (noScale > minNoScale) {
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;
    }

    // Agrandir le bouton "Oui"
    yesScale += 0.5;
    yesButton.style.transform = `scale(${yesScale})`;

    // Augmenter l'espace entre les boutons
    const currentGap = parseFloat(buttonContainer.style.gap) || 20;
    const newGap = Math.sqrt(currentGap * 250);
    buttonContainer.style.gap = `${newGap}px`;

    noClicks++;
});

// Quand on clique sur "Oui"
yesButton.addEventListener("click", () => {
    // Jouer un son kawaii
    document.getElementById("yay-sound").play();

    // Lancer les confettis
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Faire danser Togepi
    gifElement.classList.add("dance");

    // Rediriger après 2 secondes
    setTimeout(() => {
        window.location.href = "yay.html";
    }, 2000);
});
