"use strict";

function flattenAndSort(array) {
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    arr.push(...element);
    
  }
  return arr.sort((a,b) => a - b);
}

// Best Practice
// function flattenAndSort(array) {
//   return [].concat(...array).sort((a,b) => a - b);
// }
// const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], []]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);