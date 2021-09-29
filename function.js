"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log('Result: ' + num);
}
printResult2(add2(1, 2));
var combineValue;
combineValue = add2;
//combineValue = 5 ; //this will give us as error at run time  bc we have assigned combineValue 
//as a fucntion and 5 is a number not a function 
console.log(combineValue(8, 8));
//adding void mean we'll ignore any result u return 
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
