// =====================================
// BIRTHDAY WEBSITE JAVASCRIPT
// =====================================


// =====================================
// GET ELEMENTS
// =====================================

const screens =
    document.querySelectorAll(".screen");


const startButton =
    document.getElementById("startButton");

const continueButton =
    document.getElementById("continueButton");

const specialButton =
    document.getElementById("specialButton");

const gameButton =
    document.getElementById("gameButton");

const letterButton =
    document.getElementById("letterButton");

const finalButton =
    document.getElementById("finalButton");


const gameBoxes =
    document.querySelectorAll(".game-box");

const gameResult =
    document.getElementById("gameResult");


const particles =
    document.getElementById("particles");


const musicButton =
    document.getElementById("musicButton");


const photoContainer =
    document.getElementById("photoContainer");


const photoModal =
    document.getElementById("photoModal");


const closePhoto =
    document.getElementById("closePhoto");


// =====================================
// SCREEN NAVIGATION
// =====================================

function showScreen(screenId) {

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    const selectedScreen =
        document.getElementById(screenId);


    if (selectedScreen) {

        selectedScreen.classList.add("active");

    }

}


// =====================================
// WELCOME → BIRTHDAY
// =====================================

startButton.addEventListener(
    "click",
    function() {

        showScreen("birthdayScreen");

    }
);


// =====================================
// BIRTHDAY → MEMORY
// =====================================

continueButton.addEventListener(
    "click",
    function() {

        showScreen("memoryScreen");

    }
);


// =====================================
// MEMORY → SPECIAL
// =====================================

specialButton.addEventListener(
    "click",
    function() {

        showScreen("specialScreen");

    }
);


// =====================================
// SPECIAL → GAME
// =====================================

gameButton.addEventListener(
    "click",
    function() {

        showScreen("gameScreen");

    }
);


// =====================================
// GAME → LETTER
// =====================================

letterButton.addEventListener(
    "click",
    function() {

        showScreen("letterScreen");

    }
);


// =====================================
// LETTER → FINAL
// =====================================

finalButton.addEventListener(
    "click",
    function() {

        showScreen("finalScreen");

        createConfetti();

    }
);


// =====================================
// PHOTO → OPEN
// =====================================

photoContainer.addEventListener(
    "click",
    function() {

        photoModal.classList.add("active");

    }
);


// =====================================
// CLOSE PHOTO
// =====================================

closePhoto.addEventListener(
    "click",
    function() {

        photoModal.classList.remove("active");

    }
);


// =====================================
// CLOSE PHOTO BY CLICKING OUTSIDE
// =====================================

photoModal.addEventListener(
    "click",
    function(event) {

        if (event.target === photoModal) {

            photoModal.classList.remove("active");

        }

    }
);


// =====================================
// ESCAPE CLOSES PHOTO
// =====================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            photoModal.classList.remove("active");

        }

    }
);


// =====================================
// HEART GAME
// =====================================

let winningBox =
    Math.floor(
        Math.random() * gameBoxes.length
    );


let gameWon = false;


gameBoxes.forEach(
    function(box, index) {

        box.addEventListener(
            "click",
            function() {

                // Stop after winning
                if (gameWon) {

                    return;

                }


                // Don't let a previously
                // clicked box be clicked again
                if (
                    box.dataset.clicked === "true"
                ) {

                    return;

                }


                box.dataset.clicked = "true";


                // Correct box
                if (index === winningBox) {

                    box.textContent = "❤️";

                    box.classList.add("found");

                    gameResult.textContent =
                        "YOU FOUND IT! ❤️🔥";

                    gameWon = true;


                    letterButton.classList.remove(
                        "hidden"
                    );


                    createConfetti();

                }


                // Wrong box
                else {

                    box.textContent = "×";

                    box.style.color =
                        "#ff1744";

                    gameResult.textContent =
                        "Nope 😂 Keep looking!";

                }

            }
        );

    }
);


// =====================================
// CREATE PARTICLES
// =====================================

function createParticles() {

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.classList.add(
            "particle"
        );


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            5 + Math.random() * 8 + "s";


        particle.style.animationDelay =
            Math.random() * 8 + "s";


        particle.style.opacity =
            Math.random();


        particles.appendChild(
            particle
        );

    }

}


createParticles();


// =====================================
// CONFETTI
// =====================================

function createConfetti() {

    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.style.position =
            "fixed";


        confetti.style.width =
            "8px";


        confetti.style.height =
            "8px";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-10px";


        confetti.style.zIndex =
            "200";


        confetti.style.background =
            Math.random() > 0.5
                ? "#168cff"
                : "#ff1744";


        confetti.style.borderRadius =
            "2px";


        document.body.appendChild(
            confetti
        );


        const animation =
            confetti.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(110vh)
                             rotate(${Math.random() * 720}deg)`,

                        opacity: 0
                    }
                ],

                {

                    duration:
                        2000 +
                        Math.random() * 2500,

                    easing:
                        "ease-out"

                }

            );


        animation.onfinish =
            function() {

                confetti.remove();

            };

    }

}


// =====================================
// MUSIC BUTTON
// =====================================

let musicOn = false;


musicButton.addEventListener(
    "click",
    function() {

        musicOn = !musicOn;


        if (musicOn) {

            musicButton.textContent =
                "🔇";

            musicButton.title =
                "Music on";

        }

        else {

            musicButton.textContent =
                "🔊";

            musicButton.title =
                "Music off";

        }

    }
);