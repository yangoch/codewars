function towerBuilder(nFloors) {
  let towel = [];
  let star = "*";
  
  for (let i = 1; i <= nFloors; i++) {
    towel.push(`${star.repeat(i * 2 - 1)}`);
  }
  
  const maxStarsOnTheLastFloor = towel[towel.length - 1].length;

  return towel.map((floor) => {
    if (floor.length !== maxStarsOnTheLastFloor) {
      const currentFloorSpaces = (maxStarsOnTheLastFloor - floor.length) / 2;
      const repeatSpace = " ".repeat(currentFloorSpaces);

      return `${repeatSpace}${floor}${repeatSpace}`;
    } else {
      return floor;
    }
  });
}

// Best Practices
// function towerBuilder(n) {
//   return Array.from({length: n}, function(v, k) {
//     const spaces = ' '.repeat(n - k - 1);
//     return spaces + '*'.repeat(k + k + 1) + spaces;
//   });
// }
// function towerBuilder(nFloors) {
//   var tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(" ".repeat(nFloors - i - 1)
//              + "*".repeat((i * 2)+ 1)
//              + " ".repeat(nFloors - i - 1));
//   }
//   return tower;
// }


console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"], "console");
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);
