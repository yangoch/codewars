function points(games) {
  let counter = 0;
  const points = {
    win: 3,
    loss: 0,
    tie: 1,
  };

  for (let i = 0; i < games.length; i++) {
    const gameSplitted = games[i].split(":");

    if (gameSplitted[0] > gameSplitted[1]) {
      counter += points.win;
    } else if (gameSplitted[0] === gameSplitted[1]) {
      counter += points.tie;
    }
  }

  return counter;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
