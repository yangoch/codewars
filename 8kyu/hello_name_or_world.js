// Hello, Name or World!

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"



function hello(name) {
  if(name === undefined || name.length === 0) {
    return "Hello, World!";
  }

  let lowerCaseOfName = name.toLowerCase();
  return `Hello, ${lowerCaseOfName[0].toUpperCase()}${lowerCaseOfName.slice(1)}!`
}

// const hello = s =>
//   `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

console.log(hello('aliCe'), 'Hello, Alice!');
console.log(hello('alice'), 'Hello, Alice!');
console.log(hello(''), 'Hello, World!');
console.log(hello(), 'Hello, World!');