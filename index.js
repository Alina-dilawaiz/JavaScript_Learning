let name = 'Aleena';
console.log(name);

let firstName = "Aleena", lastName = 'Dilawaiz';
console.log(firstName);
console.log(lastName)

let interestRate = 0.3;
interestRate = 1 
// New value will be printed
console.log(interestRate);

// If we don't want to change the value we can declare it as a constant

const interestRate = 0.3;
interestRate = 1 
// Cannot reassign values to constants, it will give error
console.log(interestRate);

// Primitives, left one is `symbols`
let name = 'Mosh'; //String literal
let age = 30; //Number literal
let isApproved = false; //Boolean literal
let firstName = undefined; //Undefined literal, not very common
let selectedColor = null;

// Two Types of languages:
// Static: type of variable cannot chnage
// Dynamic: can change like Javascript

// Related variables lead to creation of an object
let person = { //curly braces is reffered as object literal
    name: 'Mosh',
    age: 30
}
console.log(person)

// Two ways to work with its properties
// 1. Dot notation //more concise
person.name = 'Aleena'
console.log(person)

// 2. Bracket notation
person['name'] = 'Mahnoor'
console.log(person)
// It has its own uses, sometimes u don't know the name of target property
let selection = 'name'
person[selection] = 'Mary'

//Arrays
let selectedColors = ['red', 'blue']; //Square brackets refer to array literal
selectedColors[2] = 'green';
selectedColors[3] = 1
console.log(selectedColors.length);

// Function
function greet(name, lastName) {
    console.log("Hello " + name + ' ' + lastName);
}
greet('John', 'lors'); //argument
greet('Marry', 'blue')

// Function that calculates a value
function square(x, y) {
    return x * y;
}

let value = square(2, 3);
console.log(value)
console.log(square(2, 3))