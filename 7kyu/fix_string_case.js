function solve(s) {
  const upperCaseLetters = s.match(/[A-Z]/g);
  const lowerCaseLetters = s.match(/[a-z]/g);

  return (upperCaseLetters && upperCaseLetters.length) >
    (lowerCaseLetters && lowerCaseLetters.length)
    ? s.toUpperCase()
    : s.toLowerCase();
}

console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");
