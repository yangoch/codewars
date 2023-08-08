function countPositivesSumNegatives(input) {
  // your code here

  let countPositiveNumbers = 0;
  let sumOfNegativeNumbers = 0;

  if (input === null || input.length === 0) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if (element > 0) {
      countPositiveNumbers++;
    } else {
      sumOfNegativeNumbers += element;
    }
  }

  return [countPositiveNumbers, sumOfNegativeNumbers];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); // [10, -65]
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
); // [8, -50]
console.log(
  countPositivesSumNegatives([])
); // []
