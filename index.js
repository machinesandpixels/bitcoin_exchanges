// init express
const express = require("express");

// init body-parser
const bodyParser = require("body-parser");

// init request
const request = require("request");

// init the express instance
const app = express();

// Set bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// Route to homepage
app.get("/", function(req, res){

        res.sendFile(__dirname + "/index.html");
}); 

// Post to homepage 
app.post("/", function(req, res){

// console.log(req.body.crypto);

// Make request to the BitcoinAverage API
request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response,body){

let bitData = JSON.parse(body);
let price = bitData.last;
console.log(price);
res.send("<h1> The currect exhange is " + price + " USD </h1>")

});

});


// Listening to port 3000
app.listen(3000, function(){

    console.log("server started on port 3000");

});



