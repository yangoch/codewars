function firstNonConsecutive(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff > 1) {
      return arr[i + 1];
    }
  }

  return null;
}

// Best Practices
// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1]
//     }
//   }
//   return null
// }
// function firstNonConsecutive (arr) {
//   let result = arr.find((val, index) => val !== index + arr[0]);

//   return (Number.isInteger(result)) ? result : null;
// }

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]), 6);
console.log(firstNonConsecutive([1, 2, 3, 4]), null);
console.log(firstNonConsecutive([-9, -8, -7, -4, -3, -2, -1, 0]), "-4");
