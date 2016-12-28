# TDDJS
A group of experiments with unit tests and TDD using Javascript
## TDD  
- [ ] 1. Learn Test Driven Development (TDD)  
Tutorial source: https://github.com/dwyl/learn-tdd  
folder in this repository: vending-machine  
The objective of this tutorial is to create a vending-machine. It has only one method (*getChange (totalPayable, cashPaid)*) that receives the cost of an item and how much the user has inserted in the machine. It should then calculate the change among the possible options (coins = [200, 100, 50, 20, 10, 5, 2, 1]) and return it to the user as an array.
Test cases:
getChange(1, 1) should equal [] - an empty array
getChange(215, 300) should return [50,20,10,5]
getChange(486, 600) should equal [100, 10, 2, 2]
getChange(12, 400) should return [200, 100, 50, 20, 5, 2, 1]  
![all test pass](https://cloud.githubusercontent.com/assets/6067175/21437260/fd685a02-c869-11e6-860c-362c9c84a372.PNG "all test pass")

- [ ]  *2. Learn QUnit*  
Tutorial source: https://github.com/dwyl/learn-qunit  
folder in this repository: learn-qunit  
A quick introduction to JavaScript unit testing with QUnit.js for complete beginners!  
![all test pass](https://cloud.githubusercontent.com/assets/6067175/21437128/471a7046-c869-11e6-97a3-15de8fb43503.PNG "all test pass")

- [ ]  *3. Learn Tape*  
Tutorial source: https://github.com/dwyl/learn-tape

- [ ]  *4. A Gentle Introduction to Javascript Test Driven Development*  
Tutorial source: http://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/  

## Code Coverage  
- [ ]  *Learn Travis*  
https://github.com/dwyl/learn-travis
  
- [ ]  *Learn Istanbul*  
https://github.com/dwyl/learn-istanbul  
  
- [ ]  *Learn testling*  
https://github.com/dwyl/learn-testling  
  
- [ ]  *Learn coveralls.io*  
https://github.com/dwyl/learn-coveralls.io

## Code Quality  
- [ ]  *learn jshint*  
https://github.com/dwyl/learn-jshint  
  
- [ ]  *learn jsdoc*  
https://github.com/dwyl/learn-jsdoc  

- [ ]  *learn api design*  
https://github.com/dwyl/learn-api-design  
