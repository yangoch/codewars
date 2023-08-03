function stringToArray(string) {
  // code code

  let newStr = "";
  let array = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char !== " ") {
      newStr += char;
    } else {
      array.push(newStr);
      newStr = "";
    }
  }
  array.push(newStr);
  return array;

  // return string.split(" ");
}

console.log(stringToArray("I love arrays they are my favorite"));
