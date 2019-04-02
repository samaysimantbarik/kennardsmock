var customers= require('express').Router();

var contracts= require("./contratcs");
customers.use("/:customerid/contracts",contracts);

var tokens= require("./tokens");
customers.use("/:accountCode/tokens",tokens);


customers.get("/:customerid", (req,res) => {

    var country= req.query.country;
var responseBody=`{
	"firstName": "John",
	"lastName": "Smith",
	"email": "johnsmith@email.com",
	"workPhone": "02 8852 4585",
	"mobilePhone": "",
	"company": "Smith Mowing",
	"country": "${country}",
	"status": "Good",
	"statusComment": ""
}`;
    res.send(responseBody);
})



customers.get("/:customerid/summary", (req,res) => {
  var body = `{
    "activeHires": 12,
    "upcomingHires": 15
  }
  
  `
    
    res.send(body);
})


module.exports=customers;