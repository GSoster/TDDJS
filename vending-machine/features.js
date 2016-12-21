/*
* totalPayable = how much the item costs
* cashPaid = how much the user inserted
* @return change (array)
*/
function getChange (totalPayable, cashPaid) {
  var diff = totalPayable - cashPaid;
  var change = [50, 20, 10, 5];
  return change;
}
