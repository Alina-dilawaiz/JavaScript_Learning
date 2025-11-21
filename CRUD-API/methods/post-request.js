const crypto = require("crypto");
const writToFile = require("../util/write-to-file")
const requestBodyparser = require("../util/body-parser");

module.exports = async (req, res) => {
    if (req.url === "/api/movies") {
        try {
            let body = await requestBodyparser(req);
            body.id = crypto.randomUUID();
            req.movies.push(body);
            writToFile(req.movies);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end();
        } catch (err) {
            console.log(err)
            res.writeHead(400, {"Content-Type": "application/json"})
            res.end(
                JSON.stringify({
                title: "Validation Found", 
                message: "Request body is is not found"}),
            );
        }
    }else{
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Not Found", message: "Route not found"}));
    }
};