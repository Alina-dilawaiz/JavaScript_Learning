module.exports = (req, res) => {
let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
console.log(baseURL);
let id = req.url.split("/")[3];
console.log(id);
const regexV4 = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/)
console.log(id);
    if (req.url === "/api/movies") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    }else if(!regexV4.test(id)){
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(JSON.stringify({
            title: "Validation Found", 
            message: "UUID is not valid"}),
        );
    }
    else if (baseURL==="/api/movies/" && regexV4.test(id)){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        let filterMovie = req.movies.filter((movie) => {
            return movie.id === id;
        })

        if (filterMovie.length > 0 ) {
            res.statusCode = 200;
            res.write(JSON.stringify(filterMovie));
            res.end();
        }else{
            res.statusCode = 404;
            res.write(JSON.stringify({title: "Not Found", message: "Movie not found"}));
            res.end();
        }
    }
    else{
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: "Not Found", message: "Route not found"}));
    }
};