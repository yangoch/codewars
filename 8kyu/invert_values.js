function invert(array) {
  return array.map((item) => (item === 0 ? item : -item));
}
console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));
console.log(invert([0]));
