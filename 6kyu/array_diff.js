function arrayDiff(a, b) {
  let diffArray = [];

  a.forEach((element) => {
    if (!b.includes(element)) {
      diffArray.push(element);
    }
  });

  return diffArray;
}

console.log(arrayDiff([1, 2], [1])); // [2], "a was [1,2], b was [1]"
console.log(arrayDiff([1, 2, 2], [1])); // [2,2], "a was [1,2,2], b was [1]"
console.log(arrayDiff([1, 2, 2], [2])); // [1], "a was [1,2,2], b was [2]"
console.log(arrayDiff([1, 2, 2], [])); // [1,2,2], "a was [1,2,2], b was []"
console.log(arrayDiff([], [1, 2])); // [], "a was [], b was [1,2]"
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3], "a was [1,2,3], b was [1,2]"
