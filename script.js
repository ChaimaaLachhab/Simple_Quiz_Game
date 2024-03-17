const table_questions = [
    {
        question: "Quel est l'opérateur pour la division entière en Java ?",
        options: ["/", "%", "//"],
        answer: "//"
    },
    {
        question: "Quelle est la sortie de ce code : System.out.println(10 > 9); ?",
        options: ["true", "false", "10"],
        answer: "true"
    },
    {
        question: "Comment déclarer une variable de type entier en Java ?",
        options: ["int x;", "integer x;", "var x;"],
        answer: "int x;"
    },
    {
        question: "Quelle est la sortie de ce code Java ?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++);\n    }\n}",
        options: ["5", "6", "Compilation Error"],
        answer: "5"
    },
    {
        question: "Quelle est la sortie de ce code Java ?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        System.out.println(++x);\n    }\n}",
        options: ["10", "11", "Compilation Error"],
        answer: "11"
    }
];



let i = 0;
let scores = 0;

const question = document.getElementById("question");
const option = document.getElementById("options");
const score = document.getElementById("score");
const submit_button = document.getElementById("submit-answer-btn");
const next_button = document.getElementById("next-question-btn");
const replay_btn = document.getElementById("replay-btn");

function displayQuestion() {
    const c_question = table_questions[i];
    question.textContent = c_question.question;
    option.innerHTML = "";
    c_question.options.forEach(i_option => {
        const i_button = document.createElement("button");
        i_button.textContent = i_option;
        i_button.addEventListener("click", () => {
            checkAnswer(i_option);
        });
        option.appendChild(i_button);
    });
}

function checkAnswer(selected) {
    const c_question = table_questions[i];
    const buttons = option.querySelectorAll("button");

    buttons.forEach(i_button => {
        i_button.disabled = true;
        if (i_button.textContent === c_question.answer) {
            i_button.classList.add("correct");
        } else if (i_button.textContent === selected) {
            i_button.classList.add("incorrect");
        }
    });

    if (selected === c_question.answer) {
        scores+=20;
        score.textContent = scores;
    }

    submit_button.style.display = "none";
    next_button.style.display = "block";
    replay_btn.style.display = "none";
}

function nextQuestion() {
    i++;
    submit_button.style.display = "block";
    next_button.style.display = "none";
    if (i < table_questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("h1").innerHTML = "End of Quiz";
    question.textContent = "Great job, you have completed the quiz!";
    option.innerHTML = "";
    submit_button.style.display = "none";
    next_button.style.display = "none";
    replay_btn.style.display = "block";
}

submit_button.addEventListener("click", () => {
    checkAnswer();
});

next_button.addEventListener("click", () => {
    nextQuestion();
});

replay_btn.addEventListener("click", () => {
    i = 0;
    scores = 0;
    score.textContent = scores;
    document.getElementById("h1").innerHTML = "Quiz Question";
    question.textContent = "";
    submit_button.style.display = "block";
    next_button.style.display = "none";
    replay_btn.style.display = "none";
    displayQuestion();
});

displayQuestion();
