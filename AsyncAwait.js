// console.log("task1");
// console.log("task2");
// console.log("task3");

// console.log("Start opertion");

// function sleep(ms){
//     let startTime = new Date().getTime();
//     console.log("opeartion is running");
//     while(new Date().getTime() < startTime+ms){
//         console.log("In progress");
//     }
//     console.log("Operation ended");
// }
// sleep(1000);

// console.log("do something else");


// //Asynchronous code
// console.log("Start opertion");

// function sleep(ms){
//     let startTime = new Date().getTime();
//     console.log("opeartion is running");
//     setTimeout(()=> {
//         console.log("Operation is done");
//     }, ms);
// }
// sleep(1000);

// console.log("do something else");


async function performTask(){
    try{
        const response = await userlogin();
        console.log("Validted user!");
        const userAuthStatus = await goToHomePage(response);
        console.log(userAuthStatus);
    }catch(err){
        console.log(err);
    }
    
}

performTask();
