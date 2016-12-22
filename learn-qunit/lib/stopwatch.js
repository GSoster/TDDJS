var T = (function () {
  'use strict';
  var timeElapsed = 0;//number of miliseconds since timerStarted
  var timeStarted = 0;//timestamp when timer was started
  var timeInterval;//keeps setInterval.

  /**
  * keeps the startTime and calls the timing method
  * @param time (Date().getTime()) when the timer has started.
  */
  var startTimer = function (startTime) {
    timeStarted = startTime || new Date().getTime();
    timing();//this function sets the UI update
    return timeStarted;
  };

  /**
  * calculates the elapsed time since the last time the method startTimer has been called.
  * @param endTime (optional) the time in wich it was stopped.
  * @returns timeElapsed since beginning.
  */
  var stopTimer = function (endTime) {
    //it sums the elapsed time in case it is not the first time the timer is being stopped.
    if (!endTime) {
      endTime = new Date().getTime();
    }

    timeElapsed = endTime - timeStarted + timeElapsed;
    return timeElapsed;
  }

/**
* It runs the updateUI method every 1000 miliseconds (1s)
*/
  var timing = function () {
    timeInterval = setInterval(function () {
      updateUI();
    }, 1000);
  };

  /**
  * resets the timer. It sets the timeElapsed and timeStarted to zero.
  * @returns timeElapsed (int)
  */
  var resetTimer = function () {
    timeElapsed = 0;
    timeStarted = 0;
    clearInterval(timeInterval);
    return timeElapsed;
  };

  /**
  * Updates the HTML to display the current time elapsed since the timer has started
  */
  var updateUI = function  () {
    var now = new Date().getTime();
    timeElapsed = now - timeStarted;
    var timer = document.getElementById('timer');
    timer.innerHTML = timeElapsed;
  };

 //allow external access to private variables & methods by returning them:
  return {
    timeStarted: timeStarted,
    timeElapsed: timeElapsed,
    startTimer: startTimer,
    stopTimer: stopTimer,
    resetTimer: resetTimer,
    timing: timing,
    updateUI: updateUI,
  };
}());
