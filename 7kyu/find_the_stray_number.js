function stray(numbers) {
  const sortedArray = numbers.sort((a, b) => a - b);

  return sortedArray[0] === sortedArray[1]
    ? sortedArray[sortedArray.length - 1]
    : sortedArray[0];
}
// Best Practices
// const stray = nums => nums.reduce((a, b) => a ^ b);
// function stray(numbers){
//   for (var i in numbers){
//      if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//   }
// }

console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);
