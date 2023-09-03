function findMissingLetter(array) {
  const regex = new RegExp(`[${array[0]}-${array[array.length - 1]}]+`);
  const lowerCaseAlp = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseAlp = lowerCaseAlp.toUpperCase();
  const foundLetters = lowerCaseAlp.match(regex) || upperCaseAlp.match(regex);
  const joinedLetters = foundLetters.join("");

  for (let i = 0; i < joinedLetters.length; i++) {
    const letter = joinedLetters[i];

    if (letter !== array[i]) return letter;
  }
}

// Best Practices
// function findMissingLetter(array)
// {
//    var i=array[0].charCodeAt();
//    array.map(x=>  x.charCodeAt()==i?i++:i);
//    return String.fromCharCode(i);
// }
// const findMissingLetter = (array) => {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   const start = alphabet.indexOf(array[0]);
//   return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
// };

console.log(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
console.log(findMissingLetter(["O", "Q", "R", "S"]), "P");
