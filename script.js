// Variables

const questions = document.querySelectorAll(".question");
const bar = document.querySelector(".progress-bar-left");
const barContainer = document.querySelector(".progress-bar-container");
const resultContainer = document.querySelector(".result-container");
const finalScore = document.getElementById("score");
const startContainer = document.querySelector(".start-container");
const tryAgainButton = document.querySelector(".again");
const startButton = document.querySelector(".start");

let score = 0;
let questionIndex = 0;

// Question display
function showQuestion(index) {
  console.log(
    "Before",
    "questionIndex",
    questionIndex,
    "questions.length",
    questions.length
  );

  questions.forEach((question, i) => {
    if (i === index) {
      question.style.display = "flex";
    } else {
      question.style.display = "none";
    }
  });
  // progress bar display
  bar.style.width = `${((index + 1) / questions.length) * 100}%`;
}

// Show quiz result
function showResult() {
  console.log("showresult");
  questions.forEach((question) => {
    question.style.display = "none";
  });
  barContainer.style.display = "none";
  resultContainer.style.display = "flex";
  finalScore.textContent = score;
}

//   Score and next question
function checkAnswer(isCorrect) {
  if (isCorrect) {
    score++;
  }
  if (questionIndex < questions.length - 1) {
    setTimeout(() => {
      questionIndex++;
      showQuestion(questionIndex);
    }, 1000);
  } else {
    showResult();
  }
  console.log(
    "After",
    "questionIndex",
    questionIndex,
    "questions.length",
    questions.length
  );
}

// Start Quiz
startButton.addEventListener("click", () => {
  startContainer.style.display = "none";
  barContainer.style.display = "block";
  showQuestion(questionIndex);
});

// QCM algo
questions.forEach((question, index) => {
  const answers = question.querySelectorAll(".answer, .correct-answer");
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      const isCorrect = answer.classList.contains("correct-answer");
      //   Style clicked answer
      answer.style.backgroundColor = isCorrect
        ? "rgba(55,255,55,0.4)"
        : "rgba(255,55,55,0.4)";
      //   Style correct answer if not clicked
      answers.forEach((ans) => {
        if (ans.classList.contains("correct-answer")) {
          ans.style.backgroundColor = "rgba(55,255,55,0.4)";
        }
      });
      checkAnswer(isCorrect);
    });
  });

  // Display 1st question only
  if (index === 0) {
    question.style.display = "none";
  } else {
    question.style.display = "none";
  }
});

// Try again: reload

tryAgainButton.addEventListener("click", () => {
    location.reload();
});
