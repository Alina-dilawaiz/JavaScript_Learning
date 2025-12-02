const x = "1";
const y = "2";

// console.log(x, y);

// // %s format variable toString
// // %d format varibale to Number
// // %i format varibale to integer
// // %d format varibale to Object
// console.log("I am %s and my age is %d", "Aleena", 21);
// console.clear();
// console.count("I am dipesh");
// console.count("I am nigesh");
// console.count("I am dipesh");
// console.countReset("I am dipesh");
// console.count("I am dipesh");

// const function1 = () => console.trace();
// const function2 = () => function1();

// function2();

const sum = () => console.log(`Sum of 2 and 3 is: ${2+3}`);
const multiply = () => 
    console.log(`Multiplication of 2 and 3 is: ${2 * 3}`);

const measureTime = () => {
    console.time("sum()");
    sum();
    console.timeEnd("sum()");
    console.time("multiply()");
    multiply();
    console.timeEnd("multiply()");
};
measureTime()


const { default: chalk } = require("chalk");
const ProgressBar = require("progress")

const bar = new ProgressBar("Downloading [:bar] :rate/bps :percent :etas", {
    total: 20,
});

const timer = setInterval( () => {
    bar.tick();
    if(bar.complete) {
        clearInterval(timer);
    }
}, 100)
const chalk = require("chalk");
console.log(chalk.green("This is nodejs tutorial"))