/*

7 kyu
Sorted? yes? no? how?

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/

function isSortedAndHow(array) {
  const sortedArray = Array.from(array).sort((a,b) => a - b);

  if(sortedArray.every((item, index) => item === array[index])) {
    return "yes, ascending";
  } else if (sortedArray.reverse().every((item, index) => item === array[index])) {
    return "yes, descending";
  } else {
    return "no";
  }
}

// Best Practices
// function isSortedAndHow(arr) {
//   return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
//          arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
// }
// const isSortedAndHow = array => {
//   let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
//   let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
  
//   return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
// }
// const isSortedAndHow = a => {
//   const s = a.join``;
//   return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
//          s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
// }

console.log(isSortedAndHow([1, 2]), "yes, ascending");
console.log(isSortedAndHow([15, 7, 3, -8]), "yes, descending");
console.log(isSortedAndHow([4, 2, 30]), "no");
