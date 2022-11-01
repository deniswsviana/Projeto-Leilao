function starTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  for (var i = 0; i < 99; i++) {
    var ranTimer = Math.floor(Math.random() * (60 - 25) + 25);
    var duration = 60 * ranTimer;
    var display = document.querySelector(".timer" + i);
    starTimer(duration, display);
  }
};
