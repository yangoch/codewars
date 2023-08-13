function moveZeros(arr) {
  let sortedArray = [];
  let zeroArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element !== 0) {
      sortedArray.push(element);
    } else {
      zeroArray.push(element);
    }
  }

  return [...sortedArray, ...zeroArray];
}

// Best Practices
// var moveZeros = function (arr) {
//   return arr
//     .filter(function (x) {
//       return x !== 0;
//     })
//     .concat(
//       arr.filter(function (x) {
//         return x === 0;
//       })
//     );
// };

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
