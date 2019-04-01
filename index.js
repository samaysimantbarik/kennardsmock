var express = require('express');
var bodyParser = require('body-parser')


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




app.listen(3000, () => console.log("Listening"));