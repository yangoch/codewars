function feast(beast, dish) {
  const firstLetters = beast[0] === dish[0];
  const lastLetters = beast[beast.length - 1] === dish[dish.length - 1];

  return firstLetters && lastLetters;
}

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);
