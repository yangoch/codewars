String.prototype.camelCase = function () {
  return this.length === 0 ? "" : this.split(" ").map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join("");
};
// word[0] === word.charAt(0)

console.log("test case".camelCase(), "TestCase");
console.log("camel Case method".camelCase(), "CamelCaseMethod");
console.log("say hello".camelCase(), "SayHello");
console.log("camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");
