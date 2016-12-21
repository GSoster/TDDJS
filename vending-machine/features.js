/*
* totalPayable = how much the item costs
* cashPaid = how much the user inserted
* @return change (array)
*/
function getChange (totalPayable, cashPaid) {
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  var diff = cashPaid - totalPayable;
  if(diff == 0)
    return [];
  var change = [];
  coins.forEach(function(coin){
    console.log("coin: " + coin);
    while (diff >= coin) {
      change.push(coin);
      diff -= coin;
    }
  });
  return change;
}
