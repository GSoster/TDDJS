

test('timeElapsed should be zero before we start the Timer', function (assert) {
  var result = T.timeElapsed;
  var expected = 0;
  equal(result, expected, 'Message: Timer is zero at start');
});
