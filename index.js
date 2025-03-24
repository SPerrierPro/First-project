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
    {
        question: "Est-ce qu'un nan est une propriété de JavaScript?",
        answers: ["Vrai", "Faux"],
        correctAnswer: "Faux",
        image: "/assets/images/quizz.jpg",
    },

]



// currentQuestion init: used to display the current question index => starts at 1 
// and used in displayQuestion() as a parameter as an index (value -1) to access the current question object.
let currentQuestion = 4;

// totalQuestions init: used to display the total number of questions
let totalQuestions = questions.length;

//  variables containing the current Question values ==> ready to inject into the DOM elements.

let questionTitle = "";
let answers = [];
let correctAnswer = "";
let image = "";

// variable question : used to DOM manipulation (injecting the question items into the DOM)
const question = document.querySelector(".btn-container");



// ------------------  Functions   ------------------

// Function to create question answers buttons: loops through the questions object
function createAnswerButtons(answer, i) {

    // creating the answer buttons
    const answerButton = document.createElement("button");
    answerButton.id = `answer${i + 1}`;
    answerButton.textContent = answer;


    //Adding span element to the answer buttons
    const answerSpan = document.createElement("span");
    answerSpan.id = "spn"
    answerSpan.textContent = (i + 1);

    answerButton.appendChild(answerSpan);
    question.appendChild(answerButton);


};


// Function to display the current question items: loops through the questions object
function displayQuestion(index) {

    const questionItem = questions[index - 1];

    // injecting the question items values into global variables
    questionTitle = questionItem.question;
    answers = questionItem.answers;
    correctAnswer = questionItem.correctAnswer;
    image = questionItem.image;
}



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


//To be moved into the Event Listener function
displayQuestion(currentQuestion);

// Injecting the question answers into the DOM using forEach loop:
answers.forEach((answer, i) => {
    createAnswerButtons(answer, i);
})
