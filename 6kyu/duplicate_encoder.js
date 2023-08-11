function duplicateEncode(word) {
  const arr = word.toLowerCase().split("");
  let str = "";

  arr.filter((elem, idx, arr) => {
    return arr.lastIndexOf(elem) !== idx || arr.indexOf(elem) !== idx
      ? (str += ")")
      : (str += "(");
  });

  return str;
}

// Best Practices
// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split("")
//     .map((el, i, arr) => {
//       return arr.indexOf(el) === arr.lastIndexOf(el) ? "(" : ")";
//     })
//     .join("");
// }

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())","should ignore case"
console.log(duplicateEncode("(( @")); // "))(("