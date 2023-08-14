function solution(string) {
  const regex = /[A-Z]/g;
  let arr = string.split("");
  let breakCamelCaseString = "";

  arr.forEach((char) => {
    if (regex.test(char)) {
      breakCamelCaseString += ` ${char}`;
    } else {
      breakCamelCaseString += char;
    }
  });

  return breakCamelCaseString;
}

// Best Practices
// function solution(string) {
//   return string.replace(/([A-Z])/g, " $1");
// }



console.log(solution("camelCasing"), "//camel Casing", "Unexpected result");
console.log(
  solution("camelCasingTest"),
  "//camel Casing Test",
  "Unexpected result"
);
