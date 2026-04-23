const questionBox = document.getElementById("questionBox");
const optionBox = document.getElementById("optionBox");
const resultBox = document.getElementById("resultBox");
let scoredisplay = document.getElementById("scoredisplay");
const nextQuestion = document.getElementById("nextQuestion");
const ansChecker = document.getElementById("ansChecker");
let score = 0;
let currentQuestionIndex = 0;
let allQuestions = [
  {
    question:
      "What was the name of Brook's original pirate crew before joining the Straw Hats?",
    options: [
      "Rumbar Pirates",
      "Yorki Pirates",
      "Solo Pirates",
      "Laboon Pirates",
    ],
    answer: 0,
  },
  {
    question:
      "In the Whole Cake Island arc, which Sweet Commander did Urouge successfully defeat?",
    options: ["Cracker", "Smoothie", "Snack", "Katakuri"],
    answer: 2,
  },
  {
    question: "What was Robin's code name when she worked for Baroque Works?",
    options: [
      "Miss Sunday",
      "Miss Monday",
      "Miss All-Sunday",
      "Miss Wednesday",
    ],
    answer: 2,
  },
  {
    question:
      "What is the name of the legendary sword Zoro received from Ryuma in Thriller Bark?",
    options: ["Sandai Kitetsu", "Shusui", "Wado Ichimonji", "Enma"],
    answer: 1,
  },
  {
    question:
      "Which Cipher Pol 9 member had a Power Level (Douriki) of exactly 2180?",
    options: ["Lucchi", "Kaku", "Jabira", "Blueno"],
    answer: 2,
  },
  {
    question: "Who was the first person to ever escape Impel Down solo?",
    options: ["Luffy", "Shiki", "Buggy", "Morley"],
    answer: 1,
  },
  {
    question:
      "What is the name of Big Mom's 'Living Vivre Card' homie that Nami uses to control the forest?",
    options: ["Randolph", "King Baum", "Zeus", "Napoleon"],
    answer: 1,
  },
  {
    question:
      "In the Dressrosa arc, what was Law’s bounty before it was frozen due to becoming a Warlord?",
    options: ["200,000,000", "440,000,000", "500,000,000", "250,000,000"],
    answer: 1,
  },
  {
    question:
      "What is the name of the ship used by the Sun Pirates under Fisher Tiger?",
    options: [
      "The Snapper Head",
      "The Sun Voyager",
      "The Sea King",
      "The Great Fisher",
    ],
    answer: 0,
  },
  {
    question:
      "How many years did Pedro lose from his lifespan during his first visit to Totto Land?",
    options: ["30 years", "50 years", "70 years", "100 years"],
    answer: 1,
  },
];

function loadQuestion() {
  let currentQuestion = allQuestions[currentQuestionIndex];
  questionBox.innerText = currentQuestion.question;
  optionBox.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.innerText = option;
    optionBox.appendChild(optionButton);
    optionButton.addEventListener("click", function () {
      if (index === currentQuestion.answer) {
        score++;
        scoredisplay.textContent = score;
        ansChecker.textContent = "Right Answer";
      } else {
        ansChecker.textContent = "Wrong Answer";
      }
      document
        .querySelectorAll("#optionBox button")
        .forEach((btn) => (btn.disabled = true));
    });
  });
}
loadQuestion();

nextQuestion.addEventListener("click", function () {
  currentQuestionIndex++;
  ansChecker.textContent = "";
  if (currentQuestionIndex < allQuestions.length) {
    loadQuestion();
   
  } else {
    resultBox.style.fontFamily  = "console"
    resultBox.style.fontWeight  = "900px"
    resultBox.style.fontSize  = "44px"
    resultBox.textContent = `You completed ${score} out of ${allQuestions.length}`;
     questionBox.textContent = "";
     optionBox.textContent = ""
     nextQuestion.textContent = ""
  }
});
