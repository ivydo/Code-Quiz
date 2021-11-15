var points = 0;
var timeLeft = 75;
var countdownEl = document.getElementById("timeLeft");

function startQuiz() {
  var timer = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Finished";
      return;
    } else {
      document.getElementById("timer").innerHTML = timeLeft;
    }
    timeLeft -= 1;
  }, 1000);
  hideQuiz();
}

function hideQuiz() {
  var start = document.getElementById("container");
  if (start.style.display === "none") {
    start.style.display = "block";
  } else {
    start.style.display = "none";
  }

  var start = document.getElementById("question-container");
  if (start.style.display === "block") {
    start.style.display = "none";
  } else {
    start.style.display = "block";
  }
}

function nextQuestion(); {

}

var myObjList = {
  questions = [
    "Inside which HTML element do we put the JavaScript?",
    "Which is not a JavaScript Data Types?",
    "Inside which HTML element do we put the JavaScript?",
    "Which is not a JavaScript Data Types?",
    "Which is not a JavaScript Data Types?",
  ],
  answers = [
    "Which is not a JavaScript Data Types?",
    "Number",
    "String",
    "Boolean",
    "Header",
    "Which is not a JavaScript Data Types?",
    "Number",
    "String",
    "Boolean",
    "Header",
    "Which is not a JavaScript Data Types?",
    "Number",
    "String",
    "Boolean",
    "Header",
    "Which is not a JavaScript Data Types?",
    "Number",
    "String",
    "Boolean",
    "Header",
  ],
  question3 =[
    "Inside which HTML element do we put the JavaScript?",
    "&lt;scripting&gt;",
    "&lt;scripting&gt;",
    "&lt;scripting&gt;",
    "&lt;scripting&gt;",
  ],
  question4 =[
    "Which is not a JavaScript Data Types?",
    "Number",
    "String",
    "Boolean",
    "Header",
  ]
};