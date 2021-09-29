type Combinable = number | string;

function combine(
  n1: Combinable,
  n2: Combinable,
  resultConvertor: 'as-number' | 'as-text'
) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number" || resultConvertor === 'as-number') {
      //adding plus infront converts string  to number 
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
}
const combinedAges = combine(1, 2, "as-number");
console.log(combinedAges);

const combinStringAges = combine("1", "2", "as-number");
console.log(combinStringAges);

const combineName = combine("Max", "Anna", "as-text");
console.log(combineName);
 