function printerError(s) {
  const errors = s.match(/[^a-m]/gi);
  return `${errors === null ? 0 : errors.length}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjm")); // "0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // "8/22"
