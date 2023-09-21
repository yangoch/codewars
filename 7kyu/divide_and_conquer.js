/*

7 kyu
Divide and Conquer

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

*/

function divCon(x) {
  const sumOfStringNumbers = x
    .filter((number) => typeof number === "string")
    .reduce((a, b) => Number(a) + Number(b), 0);
  const sumOfNumbers = x
    .filter((number) => typeof number === "number")
    .reduce((a, b) => a + b, 0);

  return sumOfNumbers - sumOfStringNumbers;
}
// Best practice
// function divCon(x){
//   return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
// }

console.log(divCon([9, 3, "7", "3"]), 2);
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 14);
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 13);
