/*

7 kyu
Sum of Odd Cubed Numbers

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

function cubeOdd(arr) {
  if (arr.some((item) => !Number.isInteger(item))) return undefined;
  return arr
    .filter((item) => item % 2 !== 0)
    .reduce((acc, cv) => acc + Math.pow(cv, 3), 0);
}
// Best practice
// let cubeOdd = a => {
//   var isNumeric = a.every(x=>!isNaN(x))
//   return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
// }

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(["a", 12, 9, "z", 42]), undefined);
