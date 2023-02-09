const quizQuestions = [
  {
    question: "Which is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answerIndex: 0,
  },
  {
    question: "Who is the president of India?",
    options: ["Modi", "Biden", "Murmu", "Kovind"],
    answerIndex: 2,
  },
  {
    question: "What is the voting age in India",
    options: [18, 19, 20, 21],
    answerIndex: 0,
  },
  {
    question: "Sun rises in?",
    options: ["North", "South", "East", "West"],
    answerIndex: 2,
  },
  {
    question: "Mongo is a ...",
    options: ["Country", "Cloud Provider", "City", "Database"],
    answerIndex: 3,
  },
];

const totalNumberOfQuestions = quizQuestions.length;
let score = 0;
let currentQuestionIndex = 0;

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionCountDiv = document.getElementById("question-count");
const scoreDiv = document.getElementById("score");

const contentDiv = document.getElementsByClassName("content-div")[0];

nextButton.style.visibility = "hidden";
questionCountDiv.style.visibility = "hidden";
scoreDiv.style.visibility = "hidden";

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextButtonHandler);

function nextButtonHandler() {
  const userAnswer = document.querySelectorAll("[name='ans']:checked");

  if (userAnswer.length === 0) {
    contentDiv.style.backgroundColor = "maroon";

    return;
  }

  contentDiv.style.backgroundColor = "#333";

  calculateScore(userAnswer);

  currentQuestionIndex++;

  if (currentQuestionIndex > totalNumberOfQuestions - 1) {
    //Last question has been reached. No more questions to display

    questionCountDiv.style.visibility = "hidden";
    scoreDiv.style.visibility = "hidden";

    contentDiv.innerHTML = `<div style="text-align:center;">You scored ${score} out of ${totalNumberOfQuestions}</div>`;
    nextButton.style.visibility = "hidden";
    return;
  }

  updateProgressBar();

  showQuestion();
}

function calculateScore(userAnswer) {
  quizQuestions[currentQuestionIndex].answerIndex;

  if (
    parseInt(userAnswer[0].value) ===
    quizQuestions[currentQuestionIndex].answerIndex
  ) {
    console.log("Correct Answer");
    score++;
  }
}

function startQuiz() {
  nextButton.style.visibility = "visible";
  questionCountDiv.style.visibility = "visible";
  scoreDiv.style.visibility = "visible";
  startButton.style.visibility = "hidden";

  updateProgressBar();

  showQuestion();
}

function showQuestion() {
  let questionHTML = `<div>${currentQuestionIndex + 1}) ${
    quizQuestions[currentQuestionIndex].question
  }</div>`;

  for (
    let index = 0;
    index < quizQuestions[currentQuestionIndex].options.length;
    index++
  ) {
    const option = quizQuestions[currentQuestionIndex].options[index];

    questionHTML =
      questionHTML +
      `<div>
              <input type="radio" name="ans" id="r${index}" value="${index}" />
              <label for="r${index}">${option}</label>
          </div>`;
  }

  contentDiv.innerHTML = questionHTML;
}

function updateProgressBar() {
  questionCountDiv.innerText = `Question ${
    currentQuestionIndex + 1
  }/${totalNumberOfQuestions}`;

  scoreDiv.innerText = `Score ${score}`;
}
