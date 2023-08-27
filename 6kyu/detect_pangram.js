function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet.every(element => string.toLowerCase().includes(element));
}

// Best Practices
// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }
// function isPangram(string){
//   return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }

console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
console.log(isPangram("This is not a pangram."), false);
