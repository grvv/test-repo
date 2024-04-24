// Types of functions in Javascript

// Scope

// 1. named function
// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(2, 4));

// 2. un-named function
// Curry
// closure -->
// HOF --> function that returns a function is a higher order function
// function myMultiPlier(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// const multiplyBy2 = myMultiPlier(2);
// function (b) {
//     return a * b;
//}
// now multiplyBy2 is a function that can multiply any number with 2

// console.log(multiplyBy2);

// const result = multiplyBy2(10);

// console.log(result);

// Problem with function keyword and variable
// Arrow functions
// Scope
// var let const scoping
// TDZ

// const additionOf2and4 = addition(2, 4);

// const additionOf2and4 = additionVariable(2, 4);

// const additionVariable = function (a, b) {
//   return a + b;
// };

// every time we declare a function using a function keyword -- the function is hoised on the top.
// Hoisting
// function addition(a, b) {
//   return a + b;
// }

// console.log(additionOf2and4);

// Difference between var, let, const

// console.log(myVariable);

// var myVariable = "Test 1";
// Var keyword is initialized when the code is scanned my javascript engined with a value --> undefined

// console.log(myLetVariable);
// TDZ --> Temporal Dead zone

// let myLetVariable = "Test 2";

// const myCOnstVariable = "Test 3";

// myCOnstVariable = "Testing Testing";

// console.log(myVariable, myLetVariable, myCOnstVariable);

// Scope
// Scope difference

// var, let, const --> according to the use-case use them

// start with a const and if have to update it modify with let --> I follow this

// const variable = "My Variable";
// Declared on the top level of the file, i can use it anywhere in the file

// console.log(variable);

// function mySwaggerFunction() {
//   console.log(variable);

//   function myNestedSwaggerFunction() {
//     console.log(variable);
//   }
// }

// function myAnotherSwaggerFunction() {
//   const testingSwag = "SWAG!!";
//   This variable is only scoped to this function
//      All the syntaxes var, let, const
//      All are function scoped
//   console.log(testingSwag);
// }

// myAnotherSwaggerFunction();

// var is not blocked scoped only function scoped
// let and const --> they are blocked scoped too!!
// implicit var declaration
// for (var i = 0; i < 5; i++) {
// for (i = 0; i < 5; i++) {
//   console.log("Inside", i);
// }

// console.log("Outside", i);

// let

// for (let i = 0; i < 5; i++) {
//   console.log("Inside", i);
// }

// console.log("Outside", i);

// Error: ReferenceError: i is not defined

// const

// for (const i = 0; i < 5; i++) {
//   console.log("Inside", i);
// }

// console.log("Outside", i);

// TypeError: Assignment to constant variable.

// var, let, const
// -- let, const --> ES6
// var is initialized is before -- with undefined
// var is function scoped , let, const
// let, const are block scoped

// if else, switch,

// 1. named function
// 2. un-named function
// 3. IIFI --> Immediately invoked functional expression
// 4. arrow function
// 5. HOF --> Higher order functions

// function myNamedFunction(a, b) {
//   return a + b;
// }

// const exampleOfUnNamedFunction = function (a, b) {
//   return a + b;
// };

// console.log(exampleOfUnNamedFunction(2, 4));

// 3. IIFI --> Immediately invoked functional expression

// (function () {
//   console.log("PRINTED SWAGGER!! ");
// })();

// 4. arrow function
// FAT arrow symbol = >
// const myFunction = () => {
//   console.log("Hello Hello!!");
// };

// myFunction();

// IIFE with arrow function
// (() => {
//   console.log("HEHEHEHE!");
// })();

// const multiplier = (a, b) => {
//   return a * b;
// };

// different syntax
// Implicit return
// const multiplier = (a, b) => a * b;

// ((a, b) => console.log("hahahah"))();

// console.log(multiplier(3, 4));

// Closure

function multiplication(a) {
  // a = 2
  // returns the function
  //   return function (b) { --->  this internal function will always have access to a
  return function (b) {
    return a * b;
  };
}

const multiplierBy2 = multiplication(2);

console.log(multiplierBy2);

console.log(multiplierBy2(4), multiplication(2)(10));

// Currying

// const testValueStr = "Testing Testing";

// const testValue = (() => {
// Variable 1
// Variable 2
// Variable 3
//   const testValueStr = "My Personal Testing Testing";

//   return testValueStr + " Hehehe! ";
// })();

// console.log(testValue);

// using currying
// https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more
// https://builtin.com/software-engineering-perspectives/currying-javascript
