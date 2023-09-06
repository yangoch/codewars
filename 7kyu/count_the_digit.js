function nbDig(n, d) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    let squaredNumber = i * i;
    let countedFigures111 = squaredNumber
      .toString()
      .split("")
      .filter((num) => num === d.toString()).length;

    sum += countedFigures111;
  }

  return sum;
}

// function nbDig(n, d) {
//   var o = '';
//     for(var i = 0; i <= n; i++){
//       o += Math.pow(i, 2);
//     }
//   return o.split(d).length-1
// }

console.log(nbDig(5750, 0), 4700, "n = 5750, d = 0");
console.log(nbDig(11011, 2), 9481, "n = 11011, d = 2");
console.log(nbDig(12224, 8), 7733, "n = 12224, d = 8");
console.log(nbDig(11549, 1), 11905, "n = 11549, d = 1");
