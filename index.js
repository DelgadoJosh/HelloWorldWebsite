// Yay comment!
// HTML = content
// Javascript = behavior

// Can run this with either:
// 1: node index.js
//  OR
// 1: Right click index.html in VS Code
// 2: Open with Live Server
// To stop, in the bottom bar, in the bottom right delete Port:5000

console.log("Hello world!")
console.log("And so the index begins");

// by default, it's undefined
// let name;
// console.log(name); // returns undefined

let name = 'Bob';
console.log(name); // Bob

// Cannot be a reserved keyword
//    let, if, var
// Should be meaningful
//    ie: not a, b, x, etc.
// Cannot start with a number
//    ex: 1name 5dvawef
// Cannot contain a space or hypen (-)
// Are case sensitive

// let firstName = "Bobby";
// let FirstName = "Bobbyyyyy"; // Is a different variable tahn firstName

// Can have multiple defined on a single line
// let firstName = 'Bob', lastName = 'Moss';



// let interestRate = 0.3;
const interestRate = 0.3;
// interestRate = 1;
console.log("Interest rate is: " + interestRate);


// Primitives:
//   String
//   Number
//   Boolean
//   Undefined
//   Null
//   Symbol


let nameOfYoutuber = 'Mosh';  // String literal
let age = 30; // Number Literal
let isApproved = true; // boolean Literal
let something = undefined; 
let somethingElse = null; // Want to explicitly clear the variable

let selectedColor = null; // The default value for when you want to clear the value


// Static (statically typed)
// Dynamic (Dynamically typed)
 
// Undefined is a type, also a value.


// Reference Types
//   Object
//   Array
//   Function

// Object = something in real life.
//   Person has name, place, address (properties)
//   

let person = {
  name: 'Mosh',
  age: 30,  
};

