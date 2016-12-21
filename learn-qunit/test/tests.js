

test('timeElapsed should be zero before we start the Timer', function (assert) {
  var result = T.timeElapsed;
  var expected = 0;
  equal(result, expected, 'Message: Timer is zero at start');
});

test('startTimer() starts counting from *NOW* (when instructed)', function (){
  var startTime = new Date().getTime();
  equal(T.startTimer(startTime), startTime, true);
});
