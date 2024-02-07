// const questions = [
//   {
//     question: "What is the capital of France?",
//     answers: [
//       { text: "Berlin", correct: false },
//       { text: "Madrid", correct: false },
//       { text: "Paris", correct: true },
//       { text: "Rome", correct: false },
//     ],
//   },
//   {
//     question: "What is the smallest continent in the world?",
//     answers: [
//       { text: "Asia", correct: false },
//       { text: "Australia", correct: true },
//       { text: "Arctic", correct: false },
//       { text: "Africa", correct: false },
//     ],
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     answers: [
//       { text: "Venus", correct: false },
//       { text: "Mars", correct: true },
//       { text: "Jupiter", correct: false },
//       { text: "Saturn", correct: false },
//     ],
//   },
//   {
//     question: "What is the largest mammal?",
//     answers: [
//       { text: "Elephant", correct: false },
//       { text: "Blue Whale", correct: true },
//       { text: "Giraffe", correct: false },
//       { text: "Hippotamus", correct: false },
//     ],
//   },
//   {
//     question: "Where was the first example of paper money used?",
//     answers: [
//       { text: "China", correct: true },
//       { text: "Turkey", correct: false },
//       { text: "Greece", correct: false },
//       { text: "United State of America", correct: false },
//     ],
//   },
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerButtons.appendChild(button);
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//   });
// }

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("incorrect");
//   }
//   Array.from(answerButtons.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   nextButton.style.display = "block";
// }

// function showScore() {
//   resetState();
//   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//   nextButton.innerHTML = "Play Again";
//   nextButton.style.display = "block";
// }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }

// nextButton.addEventListener("click", () => {
//   if (currentQuestionIndex < questions.length) {
//     handleNextButton();
//   } else {
//     startQuiz();
//   }
// });

// startQuiz();

// window.onload = sendApiResquest;

// async function sendApiResquest() {
//   let response = await fetch(`https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple`);
//   console.log(response)
//   let data = await response.json();
//   console.log(data);
//   useApiData(data);
// }

// function useApiData(data) {
//   document.querySelector("#category").innerHTML = `Caterory: ${data.results[0].category}`
//   document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`
//   document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`

//   // Combine incorrect and correct answers
//   const answers = [...data.results[0].incorrect_answers, data.results[0].correct_answer];
  
//   // Shuffle the answers
//   const shuffledAnswers = shuffleArray(answers);

//   // Assign shuffled answers to buttons
//   document.querySelector(".btn1").innerHTML = shuffledAnswers[0];
//   document.querySelector(".btn2").innerHTML = shuffledAnswers[1];
//   document.querySelector(".btn3").innerHTML = shuffledAnswers[2];
//   document.querySelector(".btn4").innerHTML = shuffledAnswers[3];
// }

// // Event listeners for all buttons
// document.querySelectorAll(".btn").forEach(button => {
//   button.addEventListener("click", () => {
//     if (button.innerHTML === data.results[0].correct_answer) {
//       alert("Correct!");
//     } else if (button.innerHTML === data.results[0].incorrect_answers[0]) {
//       alert("Incorrect!");
//     }
//     sendApiResquest();
//   });
// });

// // Helper function to shuffle an array
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }


window.onload = sendApiRequest;

async function sendApiRequest() {
  try {
    let response = await fetch(`https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let data = await response.json();
    useApiData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function useApiData(data) {
  document.querySelector("#category").innerHTML = `Category: ${data.results[0].category}`;
  document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`;
  document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`;

  // Combine incorrect and correct answers
  const answers = [...data.results[0].incorrect_answers, data.results[0].correct_answer];
  
  // Shuffle the answers
  const shuffledAnswers = shuffleArray(answers);

  // Assign shuffled answers to buttons
  document.querySelector(".btn1").innerHTML = shuffledAnswers[0];
  document.querySelector(".btn2").innerHTML = shuffledAnswers[1];
  document.querySelector(".btn3").innerHTML = shuffledAnswers[2];
  document.querySelector(".btn4").innerHTML = shuffledAnswers[3];
}

// Event listeners for all buttons
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    if (button.innerHTML === data.results[0].correct_answer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
    sendApiRequest();
  });
});

// Helper function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
