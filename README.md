# InterviewPrepration
## https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/


var	let	const
The scope of a var variable is functional scope.	The scope of a let variable is block scope.	The scope of a const variable is block scope.

It can be updated and re-declared into the scope.	It can be updated but cannot be re-declared into the scope.	It cannot be updated or re-declared into the scope.

It can be declared without initialization.	It can be declared without initialization.	It cannot be declared without initialization.

It can be accessed without initialization as its default value is “undefined”.	It cannot be accessed without initialization otherwise it will give ‘referenceError’.	It cannot be accessed without initialization, as it cannot be declared without initialization.

hoisting done, with initializing as ‘default’ value	Hoisting is done, but not initialized (this is the reason for the error when we access the let variable before declaration/initialization	Hoisting is done, but not initialized (this is the reason for the error when we access the const variable before declaration/initialization







## what is scope in javascript
In JavaScript, the term "scope" refers to the visibility and accessibility of variables, functions, and objects in a particular part of your code during runtime. It determines where variables and functions are accessible or can be referenced.

JavaScript has three main types of scope:

Global Scope: Variables declared outside of any function or block have global scope. They are accessible throughout the entire JavaScript program, including all functions and blocks.

Function Scope: Variables declared inside a function have function scope. They are only accessible within the function itself and any nested functions or blocks.

Block Scope: Starting from ECMAScript 6 (ES6), JavaScript introduced block scope with the introduction of the let and const keywords. Variables declared with let and const are limited to the block in which they are defined (a block is typically denoted by curly braces {}). Block scope is also applicable to loops and conditional statements.

It's important to note that variables defined with the var keyword have function scope, not block scope. They are accessible within the function in which they are defined or in the global scope if defined outside any function.

```js

// Global Scope
var globalVariable = "I'm a global variable";

function myFunction() {
  // Function Scope
  var functionVariable = "I'm a function variable";
  
  if (true) {
    // Block Scope
    let blockVariable = "I'm a block variable";
    const anotherBlockVariable = "I'm another block variable";
    
    console.log(blockVariable);           // Output: I'm a block variable
    console.log(anotherBlockVariable);    // Output: I'm another block variable
  }
  
  console.log(functionVariable);         // Output: I'm a function variable
  console.log(globalVariable);           // Output: I'm a global variable
  console.log(blockVariable);            // Error: blockVariable is not defined
}

myFunction();

```


Here's an example to illustrate the concept of scope:
