// MENU BURGER //

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})

// query selector pour le bouton ok
// query selector pour l'input pour récupérer le nom saisi avec .value
// query selector pour l'onglet name sur la page de jeu
//function quand le bouton est cliqué pour l'étape 2 et 3 

// function récupérant le nom de l'utilisateur pour la page de jeu quand le bouton ok est cliqué

const validationButton = document.querySelector(".validation");

validationButton.addEventListener("click", function () {
    const userNameSelector = document.querySelector("input");
    const userNameInGame = document.querySelector("#user-name");

    if (!userNameSelector.value) {
        alert("Merci de saisir un nom pour commencer le quiz !");
    }
    console.log(userNameSelector.value);

    userNameInGame.textContent = userNameSelector.value;
});
