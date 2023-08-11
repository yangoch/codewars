function order(words) {
  return words.split(" ").sort((a,b) => a.match(/[0-9]/) - b.match(/[0-9]/)).join(" ");

//   const array = words.split(" ");
//   let sortedArray = [];
//   for (i = 0; i <= array.length; i++) {
//     for (j = 0; j < array.length; j++) {
//       if (array[j].indexOf(i) >= 0) {
//         sortedArray.push(array[j]);
//       }
//     }
//   }
//   return sortedArray.join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order("")); // "", "empty input should return empty string" )
Your Order, Please