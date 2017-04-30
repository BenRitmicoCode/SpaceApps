// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/discover",function(req,res){
  res.sendFile(__dirname + '/first/indexone.html');
})
app.get("/data",function(req,res){
  res.sendFile(__dirname + '/second/waterdata.html');
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
