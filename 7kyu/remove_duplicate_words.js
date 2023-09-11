function removeDuplicateWords(s) {
  const splitted = s.split(" ");
  let obj = {};
  let arr = [];

  for (let i = 0; i < splitted.length; i++) {
    const element = splitted[i];
    obj[element] = obj[element] || 0;
  }

  for (const [key, value] of Object.entries(obj)) {
    arr.push(key);
  }

  return arr.join(" ");
  // return [...new Set(splitted)].join(" ");
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  ),
  "alpha beta gamma delta"
);
