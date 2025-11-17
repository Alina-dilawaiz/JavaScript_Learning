// // synchronous in nature
// console.log("Start")
// function asyncTask(cb) {
//     console.log("running")
//     setTimeout(cb, 0);
// }

// asyncTask(() => console.log(name));
// console.log("End")
// const name = "Aleena";



function asyncTask(cb) {
    setTimeout(() => {
        cb(null, "I am data")
    }, 0);
}

asyncTask((err, data) => {
    if (err) {
        throw err;
    }
    else {
        console.log("data", data)
    }
});



