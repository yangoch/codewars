function reverseWords(str) {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
}

//   "This is an example!" ==> "sihT si na !elpmaxe"
//   "double  spaces"      ==> "elbuod  secaps"

console.log(reverseWords("This is an example!"));
console.log(reverseWords("double spaces"));
