// MENU BURGER //

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})


// ------------------  Global Variables   ------------------


// Object Question init:

const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        answers: ["Paris", "Londres", "Berlin", "Rome"],
        correctAnswer: "Paris",
        image: "/assets/images/voyage.jpg",
    },
    {
        question: "Quelle est la capitale de l'Italie'?",
        answers: ["Marseille", "Rome", "Berlin", "Lisbonne"],
        correctAnswer: "Rome",
        image: "/assets/images/culture.jpg",
    },
    {
        question: "Quelle est la capitale de l'Espagne'?",
        answers: ["Obiwan Kenobi", "Madrid", "Berlin", "Pau"],
        correctAnswer: "Madrid",
        image: "/assets/images/quizz.jpg",
    },

]


// currentQuestion init: used to display the current question index => starts at 1 
// and used in displayQuestion() as a parameter as an index (value -1) to access the current question object.
let currentQuestion = 1;

// totalQuestions init: used to display the total number of questions
let totalQuestions = questions.length;

//  variables containing the current Question values ==> ready to inject into the DOM elements.

let questionTitle = "";
let answers = [];
let correctAnswer = "";
let image = "";



// ------------------  Functions   ------------------

// Function to display the current question items: loops through the questions object
function displayQuestion(index) {

    const questionItem = questions[index - 1];

    // injecting the question items into the DOM
    questionTitle = questionItem.question;
    answers = questionItem.answers;
    correctAnswer = questionItem.correctAnswer;
    image = questionItem.image;


}




displayQuestion(currentQuestion);


console.log("titre de la question :", questionTitle);
console.log("choix de reponses", answers);
console.log("reponses de la question :", correctAnswer);
console.log("image de la question :", image);




// ------------------  View   -----------------
// query selector pour le bouton ok
// query selector pour l'input pour récupérer le nom saisi avec .value
// query selector pour l'onglet name sur la page de jeu
//function quand le bouton est cliqué pour l'étape 2 et 3 

// function récupérant le nom de l'utilisateur pour la page de jeu quand le bouton ok est cliqué
//voir si j'y rajoute une fonction qui met le pseudo au format "Nom" (maj au début puis min pour le reste)

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

