function doubleChar(str) {
  let doubleString = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    doubleString += char.repeat(2);
  }

  return doubleString;
}

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");
