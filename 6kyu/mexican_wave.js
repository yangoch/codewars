function wave(str) {
  const splitted = str.split("");
  let completedArray = [];

  for (let i = 0; i < splitted.length; i++) {
    const element = splitted[i];
    const word = `${str.slice(0, i)}${element.toUpperCase()}${str.slice(
      i + 1
    )}`;
    if (element !== " ") {
      completedArray.push(word);
    }
  }
  return completedArray;
}

// Best Practice
// function wave(str) {
//   let result = [];

//   str.split("").forEach((char, index) => {
//     if (/[a-z]/.test(char)) {
//       result.push(
//         str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
//       );
//     }
//   });

//   return result;
// }

console.log(wave("two words"), [
  "Two words",
  "tWo words",
  "twO words",
  "two Words",
  "two wOrds",
  "two woRds",
  "two worDs",
  "two wordS",
]);
console.log(wave("hello"), ["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
console.log(wave("gap"), [" Gap ", " gAp ", " gaP "]);
