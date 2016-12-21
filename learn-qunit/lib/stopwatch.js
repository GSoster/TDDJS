var T = (function () {
  'use strict';
  var timeElapsed = 0;//number of miliseconds since timerStarted
  var timeStarted = 0;//timestamp when timer was started

  var startTimer = function (startTime) {
    timeStarted = startTime;
    console.log("Start time: " + startTime);
    return timeStarted;
  };

  var stopTimer = function (stopTime) {
    timeElapsed = stopTime - timeStarted;
    return stopTime;
  }

  var timing = function () {
    setInterval(function () {
      updateUI();
    }, 20);
  };

  var updateUI = function  () {
    now = new Date().getTime();
    timeElapsed = now - startTime;
    var timer = document.getElementById('timer');
    timer.innerHTML = timeElapsed;
  };

 //allow external access to private variables & methods by returning them:
  return {
    timeStarted: timeStarted,
    timeElapsed: timeElapsed,
    startTimer: startTimer,
    stopTimer: stopTimer,
  };
}());
