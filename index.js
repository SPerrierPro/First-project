// MENU BURGER //

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})


// function récupérant le nom de l'utilisateur pour la page de jeu quand le bouton ok est cliqué

const validationButton = document.querySelector(".validation");

validationButton.addEventListener("click", function () {
    const userNameSelector = document.querySelector("input");
    const userNameInGame = document.querySelector("#user-name");
    const trimmedUserName = userNameSelector.value.trim();

    if (trimmedUserName.length === 0) {
        alert("Merci de saisir un nom pour commencer le quiz !");
        return
    }

    if (trimmedUserName.length > 20) {
        alert("Merci de saisir un nom moins long pour commencer le quiz !");
        return
    }

    userNameInGame.textContent = trimmedUserName;
    //  console.log(userNameSelector.value);
});
