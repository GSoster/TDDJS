var T = (function () {
  'use strict';
  var timeElapsed = 0;//number of miliseconds since timerStarted
  var timeStarted = 0;//timestamp when timer was started

  var startTimer = function (startTime) {
    timeStarted = startTime;
    console.log("Start time: " + startTime);
    return timeStarted;
  };

 //allow external access to private variables & methods by returning them:
  return {
    timeStarted: timeStarted,
    timeElapsed: timeElapsed,
    startTimer: startTimer
  };
}());
