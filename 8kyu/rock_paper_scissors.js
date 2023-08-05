const rps = (p1, p2) => {
  //   rock | scissors | paper
  //   rock & rock -> draw
  //   scissors & scissors -> draw
  //   paper & paper -> draw
  //   scissors & paper -> scissors
  //   paper & rock -> paper
  //   rock & scissors ->  rock

  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else if (
    (p2 === "rock" && p1 === "scissors") ||
    (p2 === "scissors" && p1 === "paper") ||
    (p2 === "paper" && p1 === "rock")
  ) {
    return "Player 2 won!";
  }

  return "Incorrect words!";
};
console.log(rps("sisors", "pap")); // Incorrect words!

console.log(rps("rock", "scissors")); // Player 1 won!
console.log(rps("scissors", "paper")); // Player 1 won!
console.log(rps("paper", "rock")); // Player 1 won!
console.log(rps("scissors", "rock")); // Player 2 won!
console.log(rps("paper", "scissors")); // Player 2 won!
console.log(rps("rock", "paper")); // Player 2 won!
console.log(rps("rock", "rock")); // Draw!
console.log(rps("scissors", "scissors")); // Draw!
console.log(rps("paper", "paper")); // Draw!
console.log("Draw");

// best practice
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };
