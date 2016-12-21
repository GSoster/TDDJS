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


/*
totalPayable = 215          // £2.15
cashPaid     = 300          // £3.00
dfference    =  85          // 85p
change       = [50,20,10,5] // 50p, 20p, 10p, 5p
*/
test('getChange(215, 300) should return [50,20,10,5]', function (assert) {
    var result = getChange(215, 300);
    var expected = [50, 20, 10, 5];
    assert.deepEqual(result, expected);
});

/*
totalPayable = 486           // £4.86
cashPaid     = 600           // £6.00
dfference    = 114           // £1.14
change       = [100,10,2,2]  // £1, 10p, 2p, 2p
*/
test('getChange(486, 600) should equal [100, 10, 2, 2]', function (assert) {
  var result = getChange(486, 600);
  var expected = [100, 10, 2, 2];
  assert.deepEqual(result, expected);
});

//#########################################################
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
