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
        question: "Quel est cet animal ?",
        answers: ["Un Diable de Tasmanie", "Un Pika", "Un Okapi", "Un Zébron"],
        correctAnswer: "Un Okapi",
        image: "./assets/images/quizanimaux/okapi.jpg",
    },
    {
        question: "Quel est le nom du petit de la marmotte ?",
        answers: ["Un Marmotton", "Un Marmotteau", "Un Marmottin", "Un Marmouttet"],
        correctAnswer: "Un Marmotton",
        image: "./assets/images/quizanimaux/marmotte.jpg",
    },
    {
        question: "Lequel de ces animaux n'est pas un mammifère ?",
        answers: ["Le requin", "L'ornithorynque", "La chauve-souris", "Le koala"],
        correctAnswer: "Le requin",
        image: "./assets/images/quizanimaux/panda-roux.jpg",
    },
    {
        question: "Une reine d'Egypte s'est fait tuer par un hippopotame ?",
        answers: ["Vrai", "Faux"],
        correctAnswer: "Vrai",
        image: "./assets/images/quizanimaux/hippo.jpg",
    },
    {
        question: "Quel est le nom ridicule de ce poisson ?",
        answers: ["La grosse poule de mer", "La patate du Pacifique", "Le marin pelé", "La carpe rectale"],
        correctAnswer: "La grosse poule de mer",
        image: "./assets/images/quizanimaux/lompe.jpg",
    },
    {
        question: "Quel fait sur la fourmi est faux ?",
        answers: ["Elle peut porter plusieurs fois son poids", "Elle peut retenir sa respiration ", "Elle fait deux siestes par jour", "Elle ne brule pas"],
        correctAnswer: "Elle ne brule pas",
        image: "./assets/images/quizanimaux/fourmi.jpg",
    },
    {
        question: "Quelle est la couleur du lait d'hippopotame ?",
        answers: ["Blanc", "Rose", "Bleuté", "Orange"],
        correctAnswer: "Rose",
        image: "./assets/images/quizanimaux/lait.jpg",
    },
    {
        question: "La hyène est l'animal ayant la machoire la plus puissante ?",
        answers: ["Vrai", "Faux"],
        correctAnswer: "Vrai",
        image: "./assets/images/quizanimaux/hyene.jpg",
    },
    {
        question: "Quel est cet animal trop mignon ?",
        answers: ["Un Quokka", "Une Musaraigne", "Un Castor", "Un Chien de Prairie"],
        correctAnswer: "Un Quokka",
        image: "./assets/images/quizanimaux/quokka.jpg",
    }
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
    answerSpan.classList = "spn"
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

    // injectiing question title into the DOM
    document.querySelector("#qstn").textContent = questionTitle;

    // injectiing question image into the DOM
    document.querySelector("#quizimg").src = image;

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

    //  /!\TEST /!\ Onclick --toggleDiplay value changes after player name selection with a small delay:
    setTimeout(() => {
        document.documentElement.style.setProperty("--toggleDisplay", "flex");
    }, "2000");


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


//To move into the Event Listener function
displayQuestion(currentQuestion);

// Injecting the question answers into the DOM using forEach loop:
answers.forEach((answer, i) => {
    createAnswerButtons(answer, i);
});
