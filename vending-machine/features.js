/*
* totalPayable = how much the item costs
* cashPaid = how much the user inserted
* @return change (array)
*/
function getChange (totalPayable, cashPaid) {
  var coins = [200, 100, 50, 20, 10, 5, 2, 1];
  var diff = cashPaid - totalPayable;
  console.log(totalPayable, cashPaid, diff);
  if(diff == 0)
    return [];
  else if (diff < 0)
     throw new Error("cashPaid should be higher than totalPayable");
  var change = [];
  coins.forEach(function(coin){
    while (diff >= coin) {
      change.push(coin);
      diff -= coin;
    }
  });
  return change;
}
