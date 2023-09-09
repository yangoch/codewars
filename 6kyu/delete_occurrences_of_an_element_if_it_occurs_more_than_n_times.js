function deleteNth(arr, n) {
  let reversedArray = [...arr].reverse();
  let obj = {};
  let countOfTheRestElements = [];
  let completedArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    obj[element] = (obj[element] || 0) + 1;

    if (obj[element] > n) {
      let countOfRemoveElement = obj[element] - n;
      countOfTheRestElements.push({ element, countOfRemoveElement });
    }
  }

  for (let j = 0; j < reversedArray.length; j++) {
    const elementJ = reversedArray[j];

    if (
      countOfTheRestElements.some(({ element, countOfRemoveElement }) => {
        return element === elementJ && countOfRemoveElement > 0;
      })
    ) {
      countOfTheRestElements.map((el) => {
        if (elementJ === el.element) {
          el.countOfRemoveElement--;
        }
      });
    } else {
      completedArray.push(elementJ);
    }
  }

  return completedArray.reverse();
}


// Best Practices
// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// }
// const deleteNth = (a, x) => {
//   let m = {};
//   return a.filter( v => (m[v] = m[v]+1||1) <= x );
// }
// function deleteNth(arr,x){
//   var obj = {}
//   return arr.filter(function(number){
//     obj[number] = obj[number] ? obj[number] + 1 : 1
//     return obj[number] <= x
//   })
// }

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(
  deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
  [1, 1, 3, 3, 7, 2, 2, 2]
);
console.log(
  deleteNth([1, 1, 3, 3, 3, 3, 7, 2, 2, 2, 2], 3),
  [1, 1, 3, 3, 3, 7, 2, 2, 2]
);
