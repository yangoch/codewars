function sortArray(array) {
  let arrayOfOddNumbers = [];
  let sortedArray = [];
  let count = 0;

  arrayOfOddNumbers = array.filter((el) => el % 2);
  arrayOfOddNumbers.sort((a, b) => a - b);

  let lengthOfArray = arrayOfOddNumbers.length;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 && count !== lengthOfArray) {
      sortedArray.push(arrayOfOddNumbers[count]);
      count++;
    } else {
      sortedArray.push(element);
    }
  }

  return sortedArray;
}
// Best Practices
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   return array.map((x) => (x % 2 ? odd.shift() : x));
// }

console.log(sortArray([1, 11, 2, 8, 3, 4, 5]), [1, 3, 2, 8, 5, 4, 11]);
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
console.log(
  sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]),
  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
);
