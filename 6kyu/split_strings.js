function solution(str) {
  let arr = [];

  for (let i = 0; i < str.length; i += 2) {
    if (str[i] && str[i + 1]) {
      arr.push(`${str[i]}${str[i + 1]}`);
    } else {
      arr.push(`${str[i]}_`);
    }
  }

  return arr;
}

// Best practice
// function solution(s){
//   return (s+"_").match(/.{2}/g)||[]
// }

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);