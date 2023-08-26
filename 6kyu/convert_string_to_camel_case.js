function toCamelCase(str) {
  return str
    .split(/[_|-]/)
    .map((word, i, arr) => {
      if (i > 0) {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
      } else {
        return word;
      }
    })
    .join("");
}

// Best Practices
// function toCamelCase(str){
//   var regExp=/[-_]\w/ig;
//   return str.replace(regExp,function(match){
//         return match.charAt(1).toUpperCase();
//    });
// }
// function toCamelCase(str){
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }
// function toCamelCase(str){
//   return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
// }

console.log(toCamelCase(""), "");
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior");
console.log(toCamelCase("A-B-C"), "ABC");
