

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
  var now = new Date().getTime();
  var expected = 2000;// timeElapsed: 2s
  var endTime = now + expected;
  T.startTimer(now);
  var result = T.stopTimer(endTime);//2s
  equal(result, expected, true);
});


test('timeStarted should continue couting after stopTimer()', function () {
  var startTime = new Date().getTime();
  var endTime = startTime + 5000;
  var timeElapsed = 0;
  T.startTimer(startTime);
  equal(T.stopTimer(endTime), 5000, true);//stoped after 5s
});
