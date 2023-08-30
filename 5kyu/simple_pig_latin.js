function pigIt(str) {
  return str
    .split(" ")
    .map((word) => /\W/.test(word) ? `${word}` : `${word.slice(1)}${word[0]}ay`)
    .join(" ");
}

// Best Practices
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }
// function pigIt(str) {
//   return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay';
//   });
// }

console.log(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
console.log(pigIt("This is my string"), "hisTay siay ymay tringsay");
