function inAscOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    const elementI = arr[i];
    for (let j = i; j < arr.length; j++) {
      const elementJ = arr[j];
      if (elementI > elementJ) {
        return false;
      }
    }
  }
  return true;
}

// Best Practices
// function inAscOrder(arr) {
//   for(let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i+1]) {
//       return false; 
//     }
//   }
//   return true;
// }
// function inAscOrder(arr) {
//   return arr.every((_,i)=>i==0||arr[i]>arr[i-1]);
// }

console.log(
  inAscOrder([1, 2, 4, 7, 19]),
  true,
  'The list of numbers "1, 2, 4, 7, 19" is in ascending order'
);
console.log(
  inAscOrder([1, 2, 3, 4, 5]),
  true,
  'The list of numbers "1, 2, 3, 4, 5" is in ascending order'
);
console.log(
  inAscOrder([1, 6, 10, 18, 2, 4, 20]),
  false,
  'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order'
);
console.log(
  inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]),
  false,
  'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order'
);
