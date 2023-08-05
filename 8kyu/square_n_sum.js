function squareSum(numbers) {
  // let sum = 0;

  // numbers.forEach((number) => {
  //   sum += number * number;
  // });

  // return sum;

  return numbers.reduce((accumulate, currentValue) => {
    return accumulate + (currentValue * currentValue);
  }, 0);
}

console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50
console.log(squareSum([])); // 0
