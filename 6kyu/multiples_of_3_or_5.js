function solution(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if ((i % 3 === 0 && i % 5 === 0) || i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }

  return sum;
}

// Best Practice
// function solution(number){
//   var sum = 0;
  
//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }

console.log(solution(10));
