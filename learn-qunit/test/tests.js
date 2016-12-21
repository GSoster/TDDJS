

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
  var expected =  now + 2000;//2s
  T.startTimer(now);
  var result = T.stopTimer(expected);//2s
  equal(result, expected, true);
});
