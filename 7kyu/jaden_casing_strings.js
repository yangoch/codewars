String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(" ");
};

let str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase(); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
console.log(str.toJadenCase());