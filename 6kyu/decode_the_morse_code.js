const objOfMorseCode = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "-.-.--": "!",
  "-....-": "-",
  "-..-.": "/",
  ".--.-.": "@",
  "-.--.": "(",
  "-.--.-": ")",
  "...---...": "SOS",
};

const decodeMorse = (morseCode) => {
  const removedSpacesFromSides = morseCode.trim();
  const splittedWords = removedSpacesFromSides.split(/  | /);

  return splittedWords.map(word => objOfMorseCode[word] || " ").join("").toUpperCase();
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE");
console.log(decodeMorse('   .... . -.--   '), 'HEY');
