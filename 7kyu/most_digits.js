/*

7 kyu
Most digits

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

function findLongest(array) {
  return array.find(item => String(item).length === String(Math.max(...array)).length);
}

console.log(findLongest([1, 10, 100]), 100);
console.log(findLongest([9000, 8, 800]), 9000);
console.log(findLongest([8, 900, 500]), 900);
console.log(findLongest([9000, 30800, 8, 800, 17464, 30700]), 30800);
