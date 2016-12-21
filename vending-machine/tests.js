//Qunit test process: Description -> computation -> acertion
/*
* the method getChange should receive 2 arguments (how much an item costs and how much the user inserted)
* and return the change.
*/
test('getChange(1, 1) should equal [] - an empty array', function(assert){
  var result = getChange(1, 1);
  var expected = [];
  assert.deepEqual(result, expected);
});

//example tests, can be removed later
/*test('this sample test should aways pass!', function (assert){
  var result = 1 + 1;
  assert.equal(result, 2);//actual result, expected
});

//a fail test will be red
test('this is what a failing test looks like!', function(assert){
  var result = [1, 2, 3];indexOf(1);//this should be 0
  assert.equal(result, -1);// we *expect* this to fail
});
*/
