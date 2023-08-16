function positiveSum(arr) {
  return arr
    .filter((item) => (item > 0 ? item : null))
    .reduce((acc, currentValue) => acc + currentValue, 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
