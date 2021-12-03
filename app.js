const express = require('express');
const app = express();
const port = 6000;


app.get("/", (req, res) => { // (req, res) === (request, response)
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})