function openOrSenior(data) {
  let memberCategorize = [];

  data.forEach((element) => {
    if (element[0] >= 55 && element[1] > 7) {
      memberCategorize.push("Senior");
    } else {
      memberCategorize.push("Open");
    }
  });

  return memberCategorize;

//   return data.map((el) => (el[0] >= 55 && el[1] > 7 ? "Senior" : "Open"));
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
//   ["Open", "Senior", "Open", "Senior"];
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);
//   ["Open", "Open", "Open", "Open"]
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
//   ["Senior", "Open", "Open", "Open"]
