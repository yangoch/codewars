const uniqueInOrder = (iterable) => {
  return [...iterable].filter((element, index, array) => {
    if (element !== array[index + 1]) {
      return element;
    }
  });
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);
console.log(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
