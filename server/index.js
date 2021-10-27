// server/index.js

const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;

var request = require('request');
var cors=require("cors");
var bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
var url="http://192.168.100.40:8003";

var x=0;
var debitCount=0;
var creditcount=0;
var onlinecount=0;
var netcount=0;
var debitgraph;
var creditgraph;
var netgraph;
var netbankingstatus="";
var onlinebankingstatus="";
var aepsstatus="";

app.post("/Cards", (req, res) => {
  // Retrieve array form post body
  var array = req.body.Result;  
  console.log(array);
  // console.log( "Node server running!@@@@@@@@#************************8&&&&&&&&&&&&&&&&:::::"+req.body.Result);
  // console.log( "Node server running!@@@@@@@@#************************8&&&&&&&&&&&&&&&&:::::"+req.body.Type);
  if(req.body.Type == 'Debit Card'){
    debitCount=req.body.Result;
  }else{
    creditcount=req.body.Result;
  }
  // x=array;
  // Return json response
  res.json({ message: "true7788" });
});

app.post("/Internet", (req, res) => {
  // Retrieve array form post body
  var array = req.body.Result;  
  console.log(array);
  // console.log( "Node server running!@@@@@@@@#************************8&&&&&&&&&&&&&&&&:::::"+req.body.Result);
  // console.log( "Node server running!@@@@@@@@#************************8&&&&&&&&&&&&&&&&:::::"+req.body.Type);
  if(req.body.Type == 'Netbanking'){
    onlinecount=req.body.Result;
  }else{
    onlinecount=req.body.Result;
  }
  // x=array;
  // Return json response
  res.json({ message: "true7788" });
});

app.post("/NetPay", (req, res) => {
  // Retrieve array form post body
  var array = req.body.Result;  
  console.log(array);
  if(req.body.Type == 'Netbanking'){
    netbankingstatus=req.body.Result;
    // console.log( "Node server running!@@@@@@@@#************************8&&&&&&&&&&&&&&&&22222222222:::::"+netbankingstatus);
  }
 else if(req.body.Type == 'Online'){
    onlinebankingstatus=req.body.Result;
  }
  else if(req.body.Type == 'AEPS'){
    aepsstatus=req.body.Result;
    console.log( "Node server running!@@@@@@@@#************************8&&&&&&&&&&&&&&&&11111111111:::::"+req.body.Result);
  }
  // x=array;
  // Return json response
  res.json({ message: "true7788" });
});

app.get("/netbankingstatus", (req, res) => {
  res.json({ message: netbankingstatus });
  netbankingstatus="";
  console.log( "Node server running!@@@@@@@@#************************101010");
});
app.get("/onlinebankingstatus", (req, res) => {
  res.json({ message: onlinebankingstatus });
  onlinebankingstatus="";
  console.log( "Node server running!@@@@@@@@#************************101010");
});
app.get("/aepsstatus", (req, res) => {
  res.json({ message: aepsstatus });
  aepsstatus="";
  console.log( "Node server running!@@@@@@@@#************************101010");
});

app.get("/cd", (req, res) => {
  res.json({ message: x });
  console.log( "Node server running!@@@@@@@@#************************8");
});

request({
  url: 'http://192.168.100.40:8003/Transaction/',
  method: 'GET',
  headers: {
      'Type': "Debit Card",
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-reddit-client'
  }
}, function(err, res, body) {
  let json = JSON.parse(body);
  debitCount=json.Result;
  console.log(json.Result);
});

app.get("/debitcount", (req, res) => {
  res.json({ message: debitCount });
  console.log( "Node server running!@@@@@@@@#************************101010");
});


request({
  url: url+'/Transaction/',
  method: 'GET',
  headers: {
      'Type': "Credit Card",
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-reddit-client'
  }
}, function(err, res, body) {
  let json = JSON.parse(body);
  creditcount=json.Result;
  console.log(json.Result);
});
app.get("/creditcount", (req, res) => {
  res.json({ message: creditcount });
  console.log( "Node server running!@@@@@@@@#************************101010");
});


request({
  url: url+'/Banking/',
  method: 'GET',
  headers: {
      'Type': "Online banking",
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-reddit-client'
  }
}, function(err, res, body) {
  let json = JSON.parse(body);
  onlinecount=json.Result;
  console.log(json.Result);
});
app.get("/onlinecount", (req, res) => {
  res.json({ message: onlinecount });
  console.log( "Node server running!@@@@@@@@#************************101010");
});


request({
  url: url+'/Banking/',
  method: 'GET',
  headers: {
      'Type': "Net banking",
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-reddit-client'
  }
}, function(err, res, body) {
  let json = JSON.parse(body);
  netcount=json.Result;
  console.log(json.Result);
});
app.get("/netcount", (req, res) => {
  res.json({ message: netcount });
  console.log( "Node server running!@@@@@@@@#************************101010");
});


request({
  url: url+'/BankGraph/',
  method: 'GET',
  headers: {
      'Type': "Debit Card",
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-reddit-client'
  }
}, function(err, res, body) {
  let json = JSON.parse(body);
  debitgraph=json;
  console.log("%%%%%%%"+json);
});
app.get("/debitgraph", (req, res) => {
  res.json({ message: debitgraph });
  console.log( "Node server running!@@@@@@@@#************************101010");
});


request({
  url: url+'/BankGraph/',
  method: 'GET',
  headers: {
      'Type': "Credit Card",
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-reddit-client'
  }
}, function(err, res, body) {
  let json = JSON.parse(body);
  creditgraph=json;
  console.log("%%%%%%%"+json);
});
app.get("/creditgraph", (req, res) => {
  res.json({ message: creditgraph });
  console.log( "Node server running!@@@@@@@@#************************101010");
});


request({
  url: url+'/NetGraph/',
  method: 'GET',
  headers: {
      'Type': "Net banking",
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-reddit-client'
  }
}, function(err, res, body) {
  let json = JSON.parse(body);
  netgraph=json;
  console.log("%%%%%%%"+json);
});
app.get("/netgraph", (req, res) => {
  res.json({ message: netgraph });
  console.log( "Node server running!@@@@@@@@#************************101010");
});

// app.get("/api", (req, res) => {
//   // res.json({ message: "Hello from cd server!@@@@@@@@#" });
//   console.log( "Node server running!@@@@@@@@#11111111");
//   request('http://192.168.100.40:8003/Transaction/', function(error, response, body) {
//     // console.log(body);
//     // res.json(body)
//     // console.log(res.json(body));
//   res.json({ message:(body)});
//   // console.log( "Node server running!@@@@@@@@#************************8");
// });
// });

app.get("/apis", (req, res) => {
    // res.json({ message: "Hello from cd server!@@@@@@@@#" });
    console.log( "Node server running!@@@@@@@@#");
    request('https://jsonplaceholder.typicode.com/users', function(error, response, body) {
      // console.log(body);
      // res.json(body)
      // console.log(res.json(body));
    res.json({ message:(body)});
    console.log( "Node server running!@@@@@@@@#************************8");

  });
  });

  app.get("/user", (req, res) => {
    // res.json({ message: "Hello from cd server!@@@@@@@@#" });
    console.log( "Hello from cd server!@@@@@@@@#");
    request('https://jsonplaceholder.typicode.com/users', function(error, response, body) {
      // console.log(body);
      // res.json(body)
      // console.log(res.json(body));
    res.json({ message:"1234567890"});

  });
  });

  
  app.get("/api", (req, res) => {
    res.json({ message: "Hello from server####@@@@@@@@@@@!" });
  });

  // All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});