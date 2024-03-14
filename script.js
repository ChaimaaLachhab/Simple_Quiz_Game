const questions = [
    {
        question: "1 + 1 = ?",
        options: ["2", "3", "0"],
        answer: "2"
    },
    {
        question: "2 + 3 = ?",
        options: ["6", "3", "5"],
        answer: "5"
    },
    {
        question: "4 + 5 = ?",
        options: ["9", "10", "7"],
        answer: "9"
    }
];

let questionNum = 0;
let scores = 0;

const question = document.getElementById("question");
const option = document.getElementById("options");
const score = document.getElementById("score");
const submit_button = document.getElementById("submit-answer-btn");
const next_button = document.getElementById("next-question-btn");

function displayQuestion() {
    const c_Question = questions[questionNum];
    question.textContent = c_Question.question;
    option.innerHTML = "";
    c_Question.options.forEach(i_option => {
        const i_button = document.createElement("button");
        i_button.textContent = i_option;

        i_button.addEventListener("click", () => {
            checkAnswer(i_option);
        });
        option.appendChild(i_button);
    });
}

function checkAnswer(selecte) {
    const c_Question = questions[questionNum];
    const buttons = option.querySelectorAll("button");

    buttons.forEach(i_button => {
        i_button.disabled = true;
        if (i_button.textContent === c_Question.answer) {
            i_button.classList.add("correct");
        } else if (i_button.textContent === selecte) {
            i_button.classList.add("incorrect");
        }
    });

    if (selecte === c_Question.answer) {
        scores++;
        score.textContent = scores;
    }

    submit_button.style.display = "none";
    next_button.style.display = "block";
}

function nextQuestion() {
    questionNum++;
    submit_button.style.display = "block";
    next_button.style.display = "none";
    if (questionNum < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    question.textContent = "Bravo, vous avez terminé le quiz !";
    option.innerHTML = "";
    submit_button.style.display = "none";
    next_button.style.display = "none";
}

submit_button.addEventListener("click", () => {
    checkAnswer();
});

next_button.addEventListener("click", () => {
    nextQuestion();
});

displayQuestion();
