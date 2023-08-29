function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sumOfFirstSlicedArray = arr
      .slice(0, i)
      .reduce((acc, cv) => acc + cv, 0);
    const sumOfSecondSlicedArray = arr
      .slice(i + 1)
      .reduce((acc, cv) => acc + cv, 0);

    if (sumOfFirstSlicedArray === sumOfSecondSlicedArray) {
      return i;
    }
  }

  return -1;
}

// Best Practices
// 1
// const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
// const findEvenIndex = (a) =>
//   a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));
// 2
// function findEvenIndex(arr) {
//   var left = 0,
//     right = arr.reduce(function (pv, cv) {
//       return pv + cv;
//     }, 0);
//   for (var i = 0; i < arr.length; i++) {
//     if (i > 0) left += arr[i - 1];
//     right -= arr[i];

//     if (left == right) return i;
//   }

//   return -1;
// }
// 3
// function findEvenIndex(arr) {
//   let left = 0;
//   let right = arr.reduce((s, n) => s + n, 0);
//   for (let i = 0; i < arr.length; i++) {
//     right -= arr[i];
//     if (left === right) return i;
//     left += arr[i];
//   }
//   return -1;
// }

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3);
