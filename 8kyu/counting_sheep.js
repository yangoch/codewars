function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let sheep = 0;
  arrayOfSheep.forEach((el) => {
    if (el) {
      sheep++;
    }
  });

  return sheep;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
