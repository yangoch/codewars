function narcissistic(value) {
  const valueToString = value.toString();
  const sumOfNumbers = valueToString.split("").map(number => Math.pow(number, valueToString.length)).reduce((acc, cv) => acc + cv, 0)

  return value === sumOfNumbers;
}

console.log(narcissistic(7)); // true
console.log(narcissistic(153)); // true
console.log(narcissistic(122)); // false
console.log(narcissistic(487)); // false