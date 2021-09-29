"use strict";
function combine(n1, n2, resultConvertor) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number" || resultConvertor === 'as-number') {
        //adding plus infront converts string  to number 
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(1, 2, "as-number");
console.log(combinedAges);
var combinStringAges = combine("1", "2", "as-number");
console.log(combinStringAges);
var combineName = combine("Max", "Anna", "as-text");
console.log(combineName);
