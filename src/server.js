const express = require('express');
const app = express();


app.get('/', (req, res)=> {
    res.send("Welcome to PPU");
});


app.listen(3010, function () {
    console.log("Listening to port 3010");
});