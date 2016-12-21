

test('timeElapsed should be zero before we start the Timer', function (assert) {
  var result = T.timeElapsed;
  var expected = 0;
  equal(result, expected, 'Message: Timer is zero at start');
});

test('startTimer() starts counting from *NOW* (when instructed)', function (){
  var startTime = new Date().getTime();
  equal(T.startTimer(startTime), startTime, true);
});


test('stopTimer() stops counting after 2 seconds', function(){
  T.resetTimer();
  var now = new Date().getTime();
  var expected = 2000;// timeElapsed: 2s
  var endTime = now + expected;
  T.startTimer(now);
  var result = T.stopTimer(endTime);//2s
  equal(result, expected, true);
});


test('stop timer two times: first with 5s elapsed time and second with 7s. Total elapsed time must be 12s', function () {
  T.resetTimer();
  //first we stop the timer after 5s, so the total elapsed time will be 5s (5000)
  var startTime = new Date().getTime();
  var timeElapsed = 5000;
  var endTime = startTime + timeElapsed;
  T.startTimer(startTime);
  equal(T.stopTimer(endTime), 5000, true);//stoped after 5s
  //then we start it and stop it again after 7s (7000), so the total elapsed time should be 12s (12000)
  startTime = new Date().getTime();
  timeElapsed = 7000;
  endTime = startTime + timeElapsed;
  T.startTimer(startTime);
  equal(T.stopTimer(endTime), 12000, true);//12s since it is 5s from the first stop plus 7s  from the second stop
});
