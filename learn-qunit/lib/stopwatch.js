var T = (function () {
  'use strict';
  var timeElapsed = 0;//number of miliseconds since timerStarted
  var timeStarted = 0;//timestamp when timer was started

  var startTimer = function (startTime) {
    timeStarted = startTime || new Date().getTime();
    return timeStarted;
  };

  /**
  * receives the time in wich it was stopped. returns timeElapsed since beginning.
  */
  var stopTimer = function (endTime) {
    //it sums the elapsed time in case it is not the first time the timer is being stopped.
    console.log(endTime);
    if (!endTime) {
      console.log('entrou');
      endTime = new Date().getTime();
    }
    console.log(endTime);
    timeElapsed = endTime - timeStarted + timeElapsed;
    return timeElapsed;
  }

  var timing = function () {
    setInterval(function () {
      updateUI();
    }, 20);
  };

  var resetTimer = function () {
    timeElapsed = 0;
    timeStarted = 0;
    return timeElapsed;
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
    resetTimer: resetTimer
  };
}());
