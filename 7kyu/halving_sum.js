/*

7 kyu
Halving Sum

Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47

*/

function halvingSum(n) {
  const startNumber = n;
  let divider = 2;
  let sum = 0;

  while (n > 0) {
    sum += n;
    n = Math.floor(startNumber / divider);
    divider *= 2;
  }

  return sum;
}
// Best Practices
// function halvingSum(n) {
//   if(n === 1) return n;
//   return n + halvingSum(Math.floor(n/2));
// } 
// function halvingSum(n) {
//   var sum = 0;
//   while(n > 0) {
//     sum += n;
//     n = Math.floor(n / 2);
//   }
//   return sum;
// }

console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);
