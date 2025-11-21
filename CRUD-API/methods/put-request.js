const requestBodyparser = require("../util/body-parser")
const writeToFile = require("../util/write-to-file");

module.exports = async (req, res) => {
    let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    console.log(baseURL);

    let id = req.url.split("/")[3];
    console.log(id);

    const regexV4 = new RegExp(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
    );

    if (!regexV4.test(id)) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            title: "Validation Found",
            message: "UUID is not valid"
        }));
        return; 
    } 

    if (baseURL === "/api/movies/" && regexV4.test(id)) {
        try {
            let body = await requestBodyparser(req);
            const index = req.movies.findIndex((movie) => movie.id === id);

            if (index === -1) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ title: "Not Found", message: "Movie not found" }));
            } else {
                req.movies[index] = { id, ...body };
                writeToFile(req.movies, { "Content-Type": "application/json" }); // corrected argument
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(req.movies[index]));
            }
        } catch (err) {
            console.log(err);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                title: "Validation Found",
                message: "UUID is not valid"
            }));
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
    }
};
