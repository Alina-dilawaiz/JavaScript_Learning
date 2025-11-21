const express = require("express")
const app = express();

const port = 3001;

app.get("/", (req, res) => {
    res.json({message: "This is home page"})
})

app.get("/users", (req, res) => {
    res.json({message: "Get all the users"})
})

app.get("/users/:id", (req, res) => {
    res.json({message: `Get user with ID s ${req.params.id}`})
})

app.get("/", (req, res) => {
    res.json({message: "This is home page"})
})

app.post("/users/", (req, res) => {
    res.json({message: "Create new user"})
})

app.put("/users/:id", (req, res) => {
    res.json({message: `Update users with ID ${req.params.id}`})
})

app.delete("/users/:id", (req, res) => {
    res.json({message: `Delete users with ID ${req.params.id}`})
})

app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})