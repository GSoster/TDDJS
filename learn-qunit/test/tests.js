

test('timeElapsed should be zero before we start the Timer', function (assert) {
  var result = T.timerElapsed;
  var expected = 0;
  equal(result, expected, 'Message: Timer is zero at start');
});
