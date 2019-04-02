var express = require('express');
var bodyParser = require('body-parser')


const app = express();

app.use(express.json());

var users= require("./Services/users");
var account= require("./Services/accounts");
var customers= require("./Services/customers");
var contracts= require("./Services/contratcs");
var totals= require("./Services/totals");
var availability= require("./Services/availability");
var content= require("./Services/content");
var contentCategories= require("./Services/contentCategories");
var invoices= require("./Services/invoice");
var payments= require("./Services/payments");
var search= require("./Services/search");


app.use("/users",users);
app.use("/accounts",account);
app.use("/customers",customers);
app.use("/contracts",contracts);
app.use("/totals",totals);
app.use("/availability",availability);
app.use("/content",content);
app.use("/contentCategories",contentCategories);
app.use("/invoices",invoices);
app.use("/payments",payments);
app.use("/search",search);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
 
// app.listen(server_port, server_ip_address, function () {
//   console.log( "Listening on " + server_ip_address + ", port " + server_port )
// });


app.listen(3000, () => console.log("Listening"));
