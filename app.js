const express = require("express");
const app = express();
const port = 7000;


app.get("/", (req, res) => { // (req, res) === (request, response)
    res.json("Hello World!"); //res.send is changed to res.json in order to eventually return an api
});


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});