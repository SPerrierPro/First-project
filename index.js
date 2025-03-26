// MENU BURGER //

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});


// ------------------  Global Variables   ------------------


// Object Question init:

const questions = [
    {
        question: "Quel est cet animal ?",
        answers: ["Un Diable de Tasmanie", "Un Pika", "Un Okapi", "Un Zébron"],
        correctAnswer: "Un Okapi",
        image: "./assets/images/quizanimaux/okapi.jpg",
        explication: "C'est un Okapi, un animal qui ne vit qu'au Congo.",
    },
    {
        question: "Quel est le nom du petit de la marmotte ?",
        answers: ["Un Marmotton", "Un Marmotteau", "Un Marmottin", "Un Marmouttet"],
        correctAnswer: "Un Marmotton",
        image: "./assets/images/quizanimaux/marmotte.jpg",
        explication: "La femelle peut en avoir jusqu'à 7 d'un coup.",
    },
    {
        question: "Lequel de ces animaux n'est pas un mammifère ?",
        answers: ["Le requin", "L'ornithorynque", "La chauve-souris", "Le koala"],
        correctAnswer: "Le requin",
        image: "./assets/images/quizanimaux/panda-roux.jpg",
        explication: "C'est le seul mammifère à pondre des oeufs avec l'echidné (Oui, Sonic pond).",
    },
    {
        question: "Une reine d'Egypte s'est fait tuer par un hippopotame ?",
        answers: ["Vrai", "Faux"],
        correctAnswer: "Vrai",
        image: "./assets/images/quizanimaux/hippo.jpg",
        explication: "Assez insolite pour rentrer dans l'histoire.",
    },
    {
        question: "Quel est le nom ridicule de ce poisson ?",
        answers: ["La grosse poule de mer", "La patate du Pacifique", "Le marin pelé", "La carpe rectale"],
        correctAnswer: "La grosse poule de mer",
        image: "./assets/images/quizanimaux/lompe.jpg",
        explication: "Son nom de base est la lompe, mais c'est bien moins drôle.",
    },
    {
        question: "Quel fait sur la fourmi est faux ?",
        answers: ["Elle peut porter plusieurs fois son poids", "Elle peut retenir sa respiration ", "Elle fait deux siestes par jour", "Elle ne brule pas"],
        correctAnswer: "Elle ne brule pas",
        image: "./assets/images/quizanimaux/fourmi.jpg",
        explication: "Cet animal est malgré tout vraiment prêt à tout pour survivre.",
    },
    {
        question: "Quelle est la couleur du lait d'hippopotame ?",
        answers: ["Blanc", "Rose", "Bleuté", "Orange"],
        correctAnswer: "Blanc",
        image: "./assets/images/quizanimaux/lait.jpg",
        explication: "Un mythe veut qu'il soit rose, mais cela a depuis été réfuté.",
    },
    {
        question: "La hyène est l'animal ayant la machoire la plus puissante ?",
        answers: ["Vrai", "Faux"],
        correctAnswer: "Vrai",
        image: "./assets/images/quizanimaux/hyene.jpg",
        explication: "Elle tient largement tête à un lion dans un combat.",
    },
    {
        question: "Quel est cet animal trop mignon ?",
        answers: ["Un Quokka", "Une Musaraigne", "Un Castor", "Un Chien de Prairie"],
        correctAnswer: "Un Quokka",
        image: "./assets/images/quizanimaux/quokka.jpg",
        explication: "Pensez à regarder des images de quokka les jours de pluie, cela redonne le sourire.",
    }
];



// currentQuestion init: used to display the current question index => starts at 1 
// and used in displayQuestion() as a parameter as an index (value -1) to access the current question object.
let currentQuestion = 1;

// totalQuestions init: used to display the total number of questions
const totalQuestions = questions.length;

//  variables containing the current Question values ==> ready to inject into the DOM elements.

let questionTitle = "";
let answers = [];
let correctAnswer = "";
let image = "";

// variable question : used to DOM manipulation (injecting the question items into the DOM)
const question = document.querySelector(".btn-container");

// Question validation variables:
let selectedAnswer = "";
let selectedAnswerId = "";

//Score starts at 0
let scorePts = 0;

// ------------------  Functions   ------------------

// Function to create question answers buttons:
function createAnswerButtons(answer, i) {

    // creating the answer buttons
    const answerButton = document.createElement("button");
    answerButton.id = `answer${i + 1}`;
    answerButton.textContent = answer;


    //Adding span element to the answer buttons
    const answerSpan = document.createElement("span");
    answerSpan.classList = "spn";
    answerSpan.textContent = (i + 1);

    answerButton.appendChild(answerSpan);
    question.appendChild(answerButton);

};


// Function to display the current question items: callback => createAnswerButtons
function displayQuestion(index, callback) {

    const questionItem = questions[index - 1];

    // injecting the question items values into global variables
    questionTitle = questionItem.question;
    answers = questionItem.answers;
    correctAnswer = questionItem.correctAnswer;
    image = questionItem.image;

    // injecting question title into the DOM
    document.querySelector("#qstn").textContent = questionTitle;

    // injecting question image into the DOM
    document.querySelector("#quizimg").src = image;

    // injecting question number into the DOM
    document.querySelector("#question").textContent = `Question ${index}/${totalQuestions}`;

    // Injecting the question answers into the DOM using forEach loop:
    answers.forEach((answer, i) => {
        callback(answer, i);
    });

};
// Function to handle questions swap :
function nextQuestion(selectedAnswer, correctAnswer, selectedAnswerId) {

    if (selectedAnswer === correctAnswer) {
        // change the color of the correct answer to green:
        console.log("good");
        document.getElementById(`${selectedAnswerId}`).style.setProperty("background-color", "green");
    };

    if (selectedAnswer !== correctAnswer) {
        // change the color of the good answer to green:
        // change the color of the wrong answer to red:
        console.log("bad");
        document.getElementById(`${selectedAnswerId}`).style.setProperty("background-color", "red");
        //document.target.textContent(`${correctAnswer}`).style.setProperty("background-color", "green");
    };

    setTimeout(() => {
        const explications = document.querySelector(".explications");
        explications.textContent = questions[currentQuestion-1].explication;
        explications.classList.toggle("explications");

        setTimeout(() => {
            if (currentQuestion < totalQuestions) {
                currentQuestion += 1;
                // Cleaning question display before displaying next question:
                question.textContent = '';
                // display next question:
                displayQuestion(currentQuestion, createAnswerButtons);
                explications.classList.toggle("explications");
            };

        }, "5000");
    }, "1000"); 

    // next question:
};


// ------------------  View   -----------------

// function récupérant le nom de l'utilisateur pour la page de jeu quand le bouton ok est cliqué

const validationButton = document.querySelector(".validation");
const homepageName = document.querySelector(".name-selection");
const homepageLogo = document.querySelector(".homepage-logo");



validationButton.addEventListener("click", function () {
    const userNameSelector = document.querySelector("input");
    const userNameInGame = document.querySelector("#user-name");
    const trimmedUserName = userNameSelector.value.trim();
    const scoreCounter = document.querySelector("#score");

    if (trimmedUserName.length === 0) {
        alert("Merci de saisir un nom pour commencer le quiz !");
        return
    };

    if (trimmedUserName.length > 20) {
        alert("Merci de saisir un nom moins long pour commencer le quiz !");
        return
    };

    //On User name validation: toggle home page elements display:
    homepageLogo.style.setProperty("--toggleHomePage", "none");
    homepageName.style.setProperty("--toggleHomePage", "none");

    //On User name validation: toggle question elements with a small delay:
    setTimeout(() => {
        document.documentElement.style.setProperty("--toggleDisplay", "flex");
    }, "500");


    if (selectedAnswer === correctAnswer) {
        scorePts += 10;
        scoreCounter.textContent = `Score : ${scorePts} points `;
    }

    userNameInGame.textContent = trimmedUserName;
    //  console.log(userNameSelector.value);
    setTimeout(() => {
        nextQuestion(selectedAnswer, correctAnswer, selectedAnswerId);
    }, "500");



    // récupérer la valeur du choix de l'utilisateur
    const btnContainer = document.querySelector(".btn-container");

    btnContainer.addEventListener("click", function (event) {
        selectedAnswer = event.target.textContent.slice(0, -1);
        selectedAnswerId = event.target.id;
        event.target.style.setProperty("box-shadow", "5px 5px 5px green");
        console.log(selectedAnswer, selectedAnswerId);
    });
});

displayQuestion(currentQuestion, createAnswerButtons);






