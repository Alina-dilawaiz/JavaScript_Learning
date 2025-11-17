// Error object

const error = new Error("Something Wrong");
// console.log(error.stack)
// console.log(error.message)

// throw new Error("I am error object");

const {customError, CustomError} = require("./CustomError")
// throw new CustomError("This is a custom error")

//Handle exception using try and catch
// try {
//     doSomething()
// } catch (e) {
//     console.log("Error Occured");
//     console.log(e);
// }

function doSomething() {
    const data = fetch("localhost:300/api")
    console.log("I am  from doFunction");
    // const data = "I am from doFunction"
    return data;
}

//uncaught exception

// process.on("uncaughtException", (err) => {
//     console.log("There was an uncaught Exception");
//     process.exit((1));
// })

doSomething();

//Exception with promises
const promise = new Promise((resolve, reject) => {
    if(false) {
        resolve(doSomething());
    }else{
        reject(doSomething());
    }
});

promise.then((val) => {
    console.log(val);
})
.catch((err) => {
    console.log("Error occured");
    console.log(err);
})


//Exception with Async and Await

const someFunction = async() => {
    try {
        await doSomething();
    }catch(err) {
        throw new CustomError(err.message)
    }
}

someFunction();