const reverseSeq = (n) => {
  let array = [];

  for (let i = n; i > 0; i--) {
    array.push(i);
  }

  return array;
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
