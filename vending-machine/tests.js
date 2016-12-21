test('this sample test should aways pass!', function (assert){
  var result = 1 + 1;
  assert.equal(result, 2);//actual result, expected
});

//a fail test will be red
test('this is what a failing test looks like!', function(assert){
  var result = [1, 2, 3];indexOf(1);//this should be 0
  assert.equal(result, -1);// we *expect* this to fail
});
