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



// === Object === 
// Object = something in real life.
//   Person has name, place, address (properties)
let person = {
  name: 'Mosh',
  age: 30,  
};


console.log(person);

// Ways to change
// Dot Notation
//   Shorter, more concise
person.name = "John"

console.log(person.name);

// Bracket Notation
//   Good for when you don't know what you're selecting
person['name'] = 'Mary';

let selection = 'age';
console.log(person[selection]);


// Arrays
let firstArray = []; // Array Literal (Empty array)
let selectedColors = ['red', 'blue'];
console.log(selectedColors);

console.log(selectedColors[0]);  // Can select individual element

selectedColors[2] = 'green';  // Length can change on the fly
console.log(selectedColors);   

// In javascript, can store different types of elements
selectedColors[3] = 1;
console.log(selectedColors);

// Arrays are objects
console.log(typeof selectedColors)



// Functions

function greet() {
  console.log('Hello World');
} // Don't need semicolon at end

greet();


function greetPerson(name) {   // Name is a parameter
  console.log('Hello ' + name);
}

greetPerson('Bob');  // Bob is an 'argument'

