const path = require("path");

const filePath = "C:\\Users\\arsla\\OneDrive\\Desktop\\Javascript\\Files\\sample.txt"

// //directory name
// console.log(path.dirname(filePath))
// console.log(__dirname)
// //base name
// console.log(path.basename(filePath))
// console.log(__filename)
// //extension name
// console.log(path.extname(filePath))

// const sampleFie = "sample.txt";

// console.log(path.join(path.dirname(filePath), sampleFie))

const fsPromise = require("fs").promises;
// console.log(fs)

const fs = require("fs")

//Readinf from a file
// fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//         console.error("Error here", err);
//         return;
//     }
//     console.log(data);
// })

// try {
//     const data = fs.readFileSync(path.join(__dirname, "Files", "sample.txt"), "utf-8");
//     console.log(data);
// }catch(err){
//     console.log(err);
// }

// const fileReading = async() => {
//     try {
//         const data = await fsPromise.readFile(filePath, {encoding: "utf-8"});
//         console.log("FS Promises: ", data)
//     }catch(err){
//         console.log(err);
//     }

// }
// fileReading();


// // Writing into file and reading that
const txtFile = path.join(__dirname, "Files", "text.txt")
const content = "I luv it";
// fs.writeFile(txtFile, content, (err) => {
//     if (err) {
//         console.error("Error here", err);
//         return;
//     }
//     console.log("Write operation completed....");
//     fs.readFile(txtFile, "utf-8", (err, data) => {
//         if (err) throw new Error(err);
//         console.log(data);
//     })
// })


const writinginFile = async() => {
    try {
        await fsPromise.writeFile(txtFile, "\n We have given new name to the file", {
            flag: "a+"
        });
        // await fsPromise.appendFile(txtFile, "This is file appended")

        await fs.promises.rename(txtFile, 
            path.join(__dirname, "Files", "newtxt.txt")
        );
        const data = fsPromise.readFile(path.join(__dirname, "Files", "newtxt.txt"));
        console.log(data.toString());
    }catch(err){
        console.log(err);
    }
}

writinginFile();