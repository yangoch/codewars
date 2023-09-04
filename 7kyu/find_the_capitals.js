const capitals = function (word) {
  const regex = new RegExp("[A-Z]+");
  let upperCases = [];
  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (regex.test(char)) {
      upperCases.push(i);
    }
  }

  return upperCases;
};

// Best Practices
// const capitals = function (word) {
//   let caps = [];
//   for (var i = 0; i < word.length; i++) {
//     if (word[i].toUpperCase() == word[i]) caps.push(i);
//   }
//   return caps;
// };
// const capitals = function (word) {
// 	return word.split('').reduce(function(memo, v, i) {
//     return v === v.toUpperCase() ? memo.concat(i) : memo;
//   }, []);
// };
// const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }

console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);
