var T = (function () {
  'use strict';
  var timeElapsed = 0;//number of miliseconds since timerStarted
  var timeStarted = 0;//timestamp when timer was started  

  var startTimer = function (startTime) {
    timeStarted = startTime;
    console.log("Start time: " + startTime);
    return timeStarted;
  };

  /**
  * receives the time in wich it was stopped. returns timeElapsed since beginning.
  */
  var stopTimer = function (endTime) {
    timeElapsed = endTime - timeStarted;
    return timeElapsed;
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
