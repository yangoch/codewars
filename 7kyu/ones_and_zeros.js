const binaryArrayToNumber = (arr) => {
  let total = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    const number = arr[i];

    if (number === 0) {
      total += 0;
    } else {
      total += Math.pow(2, arr.length - i - 1);
    }
  }

  return total;

//   return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
