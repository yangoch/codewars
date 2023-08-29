function solution(str, ending){
  return str.endsWith(ending);
}

// Best Practices
// function solution(str, ending){
//   return str.substr(-ending.length) == ending;
// }
// function solution(str, ending){
//   return str.slice(0 - ending.length) === ending;
// }

console.log(solution('abcde', 'cde'), true)
console.log(solution('sumo', 'omo'), false)
console.log(solution('abcde', 'abc'), false)