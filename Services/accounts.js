const accounts= require('express').Router();

var contracts= require("./contratcs");
accounts.use("/:accountCode/contracts",contracts);

var tokens= require("./tokens");
accounts.use("/:accountCode/tokens",tokens);

accounts.get("/:accountCode",(req,res)=>{

    var country= req.query.country;
var responseBody=`{
	"name": "Sydney Debtors Suspense",
	"country": "${country}",
	"abn": "00000000000",
	"billingEmail": "test@kennards.com.au",
	"billingStreeLine1": "Lv2 Se6",
	"billingStreeLine2": "24 Hickson Rd",
	"billingSuburb": "Millers Point",
	"billingCity": "",
	"billingState": "NSW",
	"billingPostcode": "2000",
	"billingCountry": "${country}",
	"billingPhone": "0412345678",
	"status": "1",
	"aging": {
		"currentBalance": 176.90,
		"30DaysBalance": 111.50,
		"60DaysBalance": 2172.80,
		"90DaysBalance": 3452.30
	},
	"isOrderNumberRequired": true,
	"options": [{
			"index": 1,
			"name": "D/L Required",
			"isRequired": true
		},
		{
			"index": 2,
			"name": "Ordered by",
			"isRequired": true
		}
	]

}`;

res.send(responseBody);

});


accounts.get("/:accountCode/users",(req,res)=>{
    var country= req.query.country;
    var responseBody=`[{
        "firstName": "Matthew",
        "lastName": "Bowolick",
        "email": "matthew.bowolick@ewave.com",
        "phoneNumber": "0412345678",
        "type": "account",
        "cashCustomerId": "",
        "company": "",
        "accountCode": 1000001,
        "role": "Master",
        "masterBusinessUnit": "",
        "preferredBranch": 1992,
        "preferredBusinessUnit": 22,
        "country": "${country}"
    }]`;

    res.send(responseBody);

    
});

accounts.get("/:accountCode/summary",(req,res)=>{
  var response=`{
	"activeHires": 12,
	"upcomingHires": 15,
	"activeUsers": 52,
	"linkedUsers": [
		"A C",
		"D H",
		"M N"
	],
	"outstandingInvoices": "-100",
	"daysOverdue": 8
}`;

    res.send(response);
    
});


accounts.get("/:accountCode/onHireReport",(req,res)=>{

    var response=`
    {
        "pdfByteArray": "VGhpcyBpcyBhbiBleGFtcGxlIHBkZiBieXRlIGFycmF5IGJhc2U2NCBlbmNvZGVkLCBob3dldmVyLCB0aGUgYWN0dWFsIGV4YW1wbGUgaXMgbXVjaCBsb25nZXIuIFRoaXMgZXhhbXBsZSBpcyAyODkgY2hhcmFjdGVycyBsb25nLCBob3dldmVyLCBhbiBhY3R1YWwgZXhhbXBsZSBpcyBhcm91bmQgMTIwLDAwMCBjaGFyYWN0ZXJzLiBLdWRvcyBmb3IgZGVjb2RlZCB0aGlzIGFuZCBmaW5kaW5nIHRoaXMgbWVzc2FnZSEgSGlnaC1maXZlISAtIE1hdHR5IEIgKHdyaXR0ZW4gb24gMjYvMDgvMjAxOCAxOjAwIFBNKQ=="
    }
    
    `;
    res.send(response);

    
});


accounts.get("/:accountCode/businessUnits",(req,res)=>{

var response=`[
    {
      "id": "82540",
      "name": "_MAIN",
      "status": true
    }
    ]
    `
    res.send(response);
});
module.exports= accounts;