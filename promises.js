// const promise = new Promise((resolve, reject) => {
//     console.log("Async Task execution!");
//     throw "err"
//     if (true) {
//         const person = { name: "Dippesh"};
//         resolve(person);
//         console.log("Will I be printed")
//     } else{
//         consoleerror = {errCode : "1001"}
//         reject(error);
//     }
// });

const { multiply, values } = require("lodash");

// promise.then(
//     (val) => {
//         console.log(val);
//     }
// )
// .catch(() => console.log("Failed!"))
// .finally(() => {
//     console.log("clean up");
// })



// function asyncTask(){
//     return Promise.resolve();
// }

// asyncTask().then(() => console.log(name));
// const name = "Dipesh"

// const p = Promise.reject("failed");

// p.then((val) => {
//     console.log(val);
//     return "done2";
// }).then((val) => {
//     console.log(val)
//     return "done3";
// }).then((val) => {
//     console.log(val)
// }).catch((val) => {
//     console.log(val);
// })

const makeApiCall = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This API is executed in: " + time)
        }, time);
    console.log("Print")
    })
}

let mutiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)]


Promise.all(multiApiCall).then((values) => {
    console.log(values);
});