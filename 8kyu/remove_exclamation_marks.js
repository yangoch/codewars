function removeExclamationMarks(s) {
  let str = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "!") {
      str += "";
    } else {
      str += char;
    }
  }

  return str;
}

// function removeExclamationMarks(s) {
//   return s.replace(/!/gi, "");
// }

// function removeExclamationMarks(s) {
//   return s.split("!").join("");
// }

console.log(removeExclamationMarks("Hello World!")); // "Hello World"
