function wordsToMarks(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const stringToLowerCase = string.toLowerCase();

  return stringToLowerCase.split("").map(letter => alphabet.indexOf(letter) + 1).reduce((acc, cv) => acc + cv, 0);
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);