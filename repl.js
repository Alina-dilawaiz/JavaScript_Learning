// Read Evaluate Print Loop
const repl = require("repl");
// const local = repl.start("The node console started...");
const local = repl.start("$")

local.on('exit', () => {
    console.log('exiting REPL');
    process.exit()
})