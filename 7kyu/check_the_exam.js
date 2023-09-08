function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    const correctAnswer = array1[i];
    if (correctAnswer === array2[i]) {
      score += 4;
    } else if (array2[i] === "") {
      score += 0;
    } else {
      score -= 1;
    }
  }
  return score < 0 ? 0 : score;
}

// Best Practice
// function checkExam(array1, array2) {
//   const reducer = (a, e, idx) => {
//     if (e === "") {
//       return a;  
//     }
    
//     if (e === array1[idx]) {
//       return a += 4;
//     }
    
//     return --a;
//   }
//   const score = array2.reduce(reducer, 0);
//   return score < 0 ? 0 : score;
// }

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
