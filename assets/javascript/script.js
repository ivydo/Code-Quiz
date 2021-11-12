function MyTimer(callback, val) {
  val = val || 60;
  var timer = setInterval(function () {
    callback(val);
    if (val-- <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function startQuizToggle() {
  var start = document.getElementById("container");
  if (start.style.display === "none") {
    start.style.display = "block";
  } else {
    start.style.display = "none";
  }

  new MyTimer(function (val) {
    var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
    document.getElementById("timer").textContent = timerMsg;
  });

  var start = document.getElementById("question-container");
  if (start.style.display === "block") {
    start.style.display = "none";
  } else {
    start.style.display = "block";
  }
}
