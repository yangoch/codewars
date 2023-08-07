function reverseWords(str) {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
}

//   "This is an example!" ==> "sihT si na !elpmaxe"
//   "double  spaces"      ==> "elbuod  secaps"
//   "double  spaces"      ==> "apple"

console.log(reverseWords("This is an example!"));
console.log(reverseWords("double spaces"));
console.log(reverseWords("apple"));
