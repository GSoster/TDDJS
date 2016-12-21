/*
* totalPayable = how much the item costs
* cashPaid = how much the user inserted
* @return change (array)
*/
function getChange (totalPayable, cashPaid) {
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  var diff = totalPayable - cashPaid;
  var change = [50, 20, 10, 5];
  return change;
}
