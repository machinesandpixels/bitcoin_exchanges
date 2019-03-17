// init express
const express = require("express");

// init body-parser
const bodyParser = require("body-parser");

// init the express instance
const app = express();

// Set bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// Route to homepage
app.get("/", function(req, res){

        res.sendfile(__dirname + "/index.html");

}); 








// Listining to port 3000
app.listen(3000, function(){

    console.log("server started on port 3000");

});



