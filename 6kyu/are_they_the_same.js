function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  if (array1.length === 0 && array2.length === 0) return true;

  const arr1 = array1.map((el) => el * el).sort((a, b) => a - b);
  const arr2 = array2.sort((a, b) => a - b);

  return arr1.every((el, i) => el === arr2[i]);
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
