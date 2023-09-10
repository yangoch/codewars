function capitalize(s) {
  const firstVariantOfCapitalize = s
    .split("")
    .map((letter, index) =>
      (index + 1) % 2 !== 0 ? letter.toUpperCase() : letter
    )
    .join("");
  const secondVariantOfCapitalize = s
    .split("")
    .map((letter, index) =>
      (index + 1) % 2 === 0 ? letter.toUpperCase() : letter
    )
    .join("");
  return [firstVariantOfCapitalize, secondVariantOfCapitalize];
}

console.log(capitalize("abcdef"), ["AbCdEf", "aBcDeF"]);
console.log(capitalize("codewars"), ["CoDeWaRs", "cOdEwArS"]);
console.log(capitalize("abracadabra"), ["AbRaCaDaBrA", "aBrAcAdAbRa"]);
console.log(capitalize("codewarriors"), ["CoDeWaRrIoRs", "cOdEwArRiOrS"]);
