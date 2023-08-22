function getMiddle(s) {
  const middleOfString = s.length / 2;
  const arrayOfLetters = s.split("");

  if (!Number.isInteger(middleOfString)) {
    return arrayOfLetters[Math.floor(middleOfString)];
  } else {
    return arrayOfLetters
      .slice(middleOfString - 1, middleOfString + 1)
      .join("");
  }
}

// Best Practices
// function getMiddle(s) {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }
// function getMiddle(s) {
//   var middle = s.length / 2;
//   return s.length % 2
//     ? s.charAt(Math.floor(middle))
//     : s.slice(middle - 1, middle + 1);
// }
// function getMiddle(s) {
//   return s.slice((s.length - 1) / 2, s.length / 2 + 1);
// }

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");
