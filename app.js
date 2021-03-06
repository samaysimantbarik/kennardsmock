var express = require('express');
var bodyParser = require('body-parser')

const sls = require('serverless-http');
const app = express();

app.use(express.json());

var users= require("./Services/users");
var account= require("./Services/accounts");
var customers= require("./Services/customers");
var contracts= require("./Services/contratcs");




app.use("/users",users);
app.use("/accounts",account);
app.use("/customers",customers);
app.use("/contracts",contracts);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
 
// app.listen(server_port, server_ip_address, function () {
//   console.log( "Listening on " + server_ip_address + ", port " + server_port )
// });
//module.exports.server =sls(app);
module.exports = app

//app.listen(3000, () => console.log("Listening"));
