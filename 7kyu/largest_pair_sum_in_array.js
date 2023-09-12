function largestPairSum(numbers) {
  let allPairsSum = [];

  for (let i = 0; i < numbers.length; i++) {
    const numberI = numbers[i];
    
    for (let j = i + 1; j < numbers.length; j++) {
      const numberJ = numbers[j];
      const pairSum = numberI + numberJ;
      allPairsSum.push(pairSum);
    }
  }

  return Math.max(...allPairsSum);
}

// Best Practice
// function largestPairSum(numbers){
//   numbers.sort(function(a, b){ return b - a });
//   return numbers[0] + numbers[1];
// }

console.log(largestPairSum([10, 14, 2, 23, 19]), 42);
console.log(largestPairSum([-100, -29, -24, -19, 19]), 0);
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]), 10);
console.log(largestPairSum([-10, -8, -16, -18, -19]), -18);
console.log(
  largestPairSum([
    -40, 90, 29, 38, 59, 56, -39, -70, 38, 67, -35, 50, -16, 8, -43, 27, -89,
    34, 73, 15, -26, 0, 55, 36, -13, 99, 66, 2, -66, 15, 43, -47, 50, 8, 23,
    -17, -14, 10, -56,
  ]),
  189
);
