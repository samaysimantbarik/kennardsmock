var contracts= require('express').Router();

contracts.get("/",(req,res) => {

    var response= `{
        "contracts": [{
                "hireNumber": 7578171,
                "status": "active",
                "startDateTime": "2018-10-16T18:30:00.0+10:00",
                "endDateTime": "2018-10-18T18:30:00.0+10:00",
                "mainItemCode": 270120,
                "mainItemName": "DEMOLITION SAW 230MM (9IN) CORDLESS",
                "mainItemThumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/2/7/0/270120MAIN.png",
                "priority": 1
            },
            {
                "hireNumber": 7578172,
                "status": "active",
                "startDateTime": "2018-10-16T18:30:00.0+10:00",
                "endDateTime": "2018-10-18T18:30:00.0+10:00",
                "mainItemCode": 270120,
                "mainItemName": "DEMOLITION SAW 230MM (9IN) CORDLESS",
                "mainItemThumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/2/7/0/270120MAIN.png",
                "priority": 2
            },
            {
                "hireNumber": 7578174,
                "status": "upcoming",
                "startDateTime": "2018-10-16T18:30:00.0+10:00",
                "endDateTime": "2018-10-18T18:30:00.0+10:00",
                "mainItemCode": 270120,
                "mainItemName": "DEMOLITION SAW 230MM (9IN) CORDLESS",
                "mainItemThumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/2/7/0/270120MAIN.png",
                "priority": 3
            }
        ],
        "pagination": {
            "count": 30,
            "total": 300,
            "offset": 0,
            "links": [{
                    "rel": "self",
                    "href": "http://example.apiendpoint.com/accounts/1000001/contracts?country=au&limit=30&offset=0"
                },
                {
                    "rel": "first",
                    "href": "http://example.apiendpoint.com/accounts/1000001/contracts?country=au&limit=30&offset=0"
                },
                {
                    "rel": "prev",
                    "href": null
                },
                {
                    "rel": "next",
                    "href": "http://example.apiendpoint.com/accounts/1000001/contracts?country=au&limit=30&offset=30"
                },
                {
                    "rel": "last",
                    "href": "http://example.apiendpoint.com/accounts/1000001/contracts?country=au&limit=30&offset=270"
                }
            ]
        }
    }`;
res.status(200).send(response);
});

contracts.post("/",(req,res) => {
var body=`{
	"hireNumber": 7578171,
	"contract": {
		"country": "au",
		"createdAt": "2018-10-15T07:30:00.0+10:00",
		"bpCustomerId": 1000001,
		"customerType": "account",
		"userId": 3281,
		"businessUnit": 46498,
		"startDateTime": "2018-10-16T18:30:00.0+10:00",
		"endDateTime": "2018-10-18T18:30:00.0+10:00",
		"status": "upcoming",
		"method": "delivery",
		"confirmationRequired": true,
		"confirmationReasons": ["DEL_AH"],
		"branchInfo": {
			"branchCode": 106,
			"branchName": "Kennards Hire Kellyville",
			"streetLine1": "35 Windsor Rd",
			"streetLine2": "",
			"suburb": "Kellyville",
			"state": "NSW",
			"postcode": 2756
		},
		"contactFirstName": "John",
		"contactLastName": "Doe",
		"contactPhone": "0444 999 888",
		"contactEmail": "johndoe@email.com",
		"accountInfo": {
			"purchaseOrderNumber": "56767",
			"option1Name": null,
			"option2Name": null,
			"option3Name": null,
			"option1Value": null,
			"option2Value": null,
			"option3Value": null
		},
		"deliveryAddress": {
			"streetLine1": "SE 2, Lv 6",
			"streetLine2": "24 Hickson Rd",
			"suburb": "Millers Point",
			"state": "NSW",
			"postcode": "2000",
			"country": "au"
		},
		"deliveryInstructions": "Lot 31. Call on arrival.",
		"subtotal": "1502.50",
		"discount": "280.50",
		"tax": "135.64",
		"deliveryAmount": "135.00",
		"pickupAmount": "135.00",
		"total": "1492.00",
		"depositPaid": "1492.00",
		"contractItems": [{
			"lineId": 1,
			"parentLineId": null,
			"itemCode": 270120,
			"typeId": 1,
			"itemName": "DEMOLITION SAW 230MM (9IN) CORDLESS",
			"thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003517MAIN.png",
			"qty": 1,
			"chargeDurationId": 2,
			"chargeLabel": "Day Rate",
			"chargeDurationPer": "Per Day",
			"chargeRate": "100.00",
			"chargePeriod": "2.8",
			"derivedRateId": "1341032",
			"derivedRateClassification": "equip-rate",
			"discountPercentage": "0.00",
			"discountAmount": "237.50",
			"tax": "28.18",
			"lineTotal": "310.00",
			"durationRates": [{
					"durationId": 1,
					"durationLabel": "Half Day Rate",
					"durationPer": "Per Half Day",
					"rate": "80.00",
					"currency": "AUD"
				},
				{
					"durationId": 2,
					"durationLabel": "Day Rate",
					"durationPer": "Per Day",
					"rate": "80.00",
					"currency": "AUD"
				},
				{
					"durationId": 3,
					"durationLabel": "Week Rate",
					"durationPer": "Per Week",
					"rate": "80.00",
					"currency": "AUD"
				}
			]
		}]
	}
}`
res.send(body);
});


contracts.get("/:hireNumber",(req,res) => {

    var responseBody=`{
        "country": "au",
        "createdAt": "2018-10-15T07:30:00.0+10:00",
        "bpCustomerId": 1000001,
        "customerType": "account",
        "userId": 3281,
        "businessUnit": 46498,
        "startDateTime": "2018-10-16T18:30:00.0+10:00",
        "endDateTime": "2018-10-18T18:30:00.0+10:00",
        "status": "upcoming",
        "method": "delivery",
        "confirmationRequired": true,
        "confirmationReasons": ["DEL_AH"],
        "branchInfo": {
            "branchCode": 106,
            "branchName": "Kennards Hire Kellyville",
            "streetLine1": "35 Windsor Rd",
            "streetLine2": "",
            "suburb": "Kellyville",
            "state": "NSW",
            "postcode": 2756
        },
        "contactFirstName": "John",
        "contactLastName": "Doe",
        "contactPhone": "0444 999 888",
        "contactEmail": "johndoe@email.com",
        "accountInfo": {
            "purchaseOrderNumber": "56767",
            "option1Name": null,
            "option2Name": null,
            "option3Name": null,
            "option1Value": null,
            "option2Value": null,
            "option3Value": null
        },
        "deliveryAddress": {
            "streetLine1": "SE 2, Lv 6",
            "streetLine2": "24 Hickson Rd",
            "suburb": "Millers Point",
            "state": "NSW",
            "postcode": "2000",
            "country": "au"
        },
        "deliveryInstructions": "Lot 31. Call on arrival.",
        "subtotal": "1502.50",
        "discount": "280.50",
        "tax": "135.64",
        "deliveryAmount": "135.00",
        "pickupAmount": "135.00",
        "total": "1492.00",
        "depositPaid": "1492.00",
        "contractItems": [{
            "lineId": 1,
            "parentLineId": null,
            "itemCode": 270120,
            "typeId": 1,
            "itemName": "DEMOLITION SAW 230MM (9IN) CORDLESS",
            "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003517MAIN.png",
            "qty": 1,
            "chargeDurationId": 2,
            "chargeLabel": "Day Rate",
            "chargeDurationPer": "Per Day",
            "chargeRate": "100.00",
            "chargePeriod": "2.8",
            "derivedRateId": "1341032",
            "derivedRateClassification": "equip-rate",
            "discountPercentage": "0.00",
            "discountAmount": "237.50",
            "tax": "28.18",
            "lineTotal": "310.00",
            "durationRates": [{
                    "durationId": 1,
                    "durationLabel": "Half Day Rate",
                    "durationPer": "Per Half Day",
                    "rate": "80.00",
                    "currency": "AUD"
                },
                {
                    "durationId": 2,
                    "durationLabel": "Day Rate",
                    "durationPer": "Per Day",
                    "rate": "80.00",
                    "currency": "AUD"
                },
                {
                    "durationId": 3,
                    "durationLabel": "Week Rate",
                    "durationPer": "Per Week",
                    "rate": "80.00",
                    "currency": "AUD"
                }
            ]
        }]
    }`;

    res.send(responseBody);

});

contracts.patch("/:hireNumber",(req,res) => {

    var body=`{
        "country": "au",
        "createdAt": "2018-10-15T07:30:00.0+10:00",
        "bpCustomerId": 1000001,
        "customerType": "account",
        "userId": 3281,
        "businessUnit": 46498,
        "startDateTime": "2018-10-16T18:30:00.0+10:00",
        "endDateTime": "2018-10-18T18:30:00.0+10:00",
        "status": "upcoming",
        "method": "delivery",
        "confirmationRequired": true,
        "confirmationReasons": ["DEL_AH"],
        "branchInfo": {
            "branchCode": 106,
            "branchName": "Kennards Hire Kellyville",
            "streetLine1": "35 Windsor Rd",
            "streetLine2": "",
            "suburb": "Kellyville",
            "state": "NSW",
            "postcode": 2756
        },
        "contactFirstName": "John",
        "contactLastName": "Doe",
        "contactPhone": "0444 999 888",
        "contactEmail": "johndoe@email.com",
        "accountInfo": {
            "purchaseOrderNumber": "56767",
            "option1Name": null,
            "option2Name": null,
            "option3Name": null,
            "option1Value": null,
            "option2Value": null,
            "option3Value": null
        },
        "deliveryAddress": {
            "streetLine1": "SE 2, Lv 6",
            "streetLine2": "24 Hickson Rd",
            "suburb": "Millers Point",
            "state": "NSW",
            "postcode": "2000",
            "country": "au"
        },
        "deliveryInstructions": "Lot 31. Call on arrival.",
        "subtotal": "1502.50",
        "discount": "280.50",
        "tax": "135.64",
        "deliveryAmount": "135.00",
        "pickupAmount": "135.00",
        "total": "1492.00",
        "depositPaid": "1492.00",
        "contractItems": [{
            "lineId": 1,
            "parentLineId": null,
            "itemCode": 270120,
            "typeId": 1,
            "itemName": "DEMOLITION SAW 230MM (9IN) CORDLESS",
            "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003517MAIN.png",
            "qty": 1,
            "chargeDurationId": 2,
            "chargeLabel": "Day Rate",
            "chargeDurationPer": "Per Day",
            "chargeRate": "100.00",
            "chargePeriod": "2.8",
            "derivedRateId": "1341032",
            "derivedRateClassification": "equip-rate",
            "discountPercentage": "0.00",
            "discountAmount": "237.50",
            "tax": "28.18",
            "lineTotal": "310.00",
            "durationRates": [{
                    "durationId": 1,
                    "durationLabel": "Half Day Rate",
                    "durationPer": "Per Half Day",
                    "rate": "80.00",
                    "currency": "AUD"
                },
                {
                    "durationId": 2,
                    "durationLabel": "Day Rate",
                    "durationPer": "Per Day",
                    "rate": "80.00",
                    "currency": "AUD"
                },
                {
                    "durationId": 3,
                    "durationLabel": "Week Rate",
                    "durationPer": "Per Week",
                    "rate": "80.00",
                    "currency": "AUD"
                }
            ]
        }]
    }`
    res.send(body);

});

contracts.post("/:hireNumber/cancel",(req,res) => {
var body=`{
	"country": "au",
	"createdAt": "2018-10-15T07:30:00.0+10:00",
	"bpCustomerId": 1000001,
	"customerType": "account",
	"userId": 3281,
	"businessUnit": 46498,
	"startDateTime": "2018-10-16T18:30:00.0+10:00",
	"endDateTime": "2018-10-18T18:30:00.0+10:00",
	"status": "upcoming",
	"method": "delivery",
	"confirmationRequired": true,
	"confirmationReasons": ["DEL_AH"],
	"branchInfo": {
		"branchCode": 106,
		"branchName": "Kennards Hire Kellyville",
		"streetLine1": "35 Windsor Rd",
		"streetLine2": "",
		"suburb": "Kellyville",
		"state": "NSW",
		"postcode": 2756
	},
	"contactFirstName": "John",
	"contactLastName": "Doe",
	"contactPhone": "0444 999 888",
	"contactEmail": "johndoe@email.com",
	"accountInfo": {
		"purchaseOrderNumber": "56767",
		"option1Name": null,
		"option2Name": null,
		"option3Name": null,
		"option1Value": null,
		"option2Value": null,
		"option3Value": null
	},
	"deliveryAddress": {
		"streetLine1": "SE 2, Lv 6",
		"streetLine2": "24 Hickson Rd",
		"suburb": "Millers Point",
		"state": "NSW",
		"postcode": "2000",
		"country": "au"
	},
	"deliveryInstructions": "Lot 31. Call on arrival.",
	"subtotal": "1502.50",
	"discount": "280.50",
	"tax": "135.64",
	"deliveryAmount": "135.00",
	"pickupAmount": "135.00",
	"total": "1492.00",
	"depositPaid": "1492.00",
	"contractItems": [{
		"lineId": 1,
		"parentLineId": null,
		"itemCode": 270120,
		"typeId": 1,
		"itemName": "DEMOLITION SAW 230MM (9IN) CORDLESS",
		"thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003517MAIN.png",
		"qty": 1,
		"chargeDurationId": 2,
		"chargeLabel": "Day Rate",
		"chargeDurationPer": "Per Day",
		"chargeRate": "100.00",
		"chargePeriod": "2.8",
		"derivedRateId": "1341032",
		"derivedRateClassification": "equip-rate",
		"discountPercentage": "0.00",
		"discountAmount": "237.50",
		"tax": "28.18",
		"lineTotal": "310.00",
		"durationRates": [{
				"durationId": 1,
				"durationLabel": "Half Day Rate",
				"durationPer": "Per Half Day",
				"rate": "80.00",
				"currency": "AUD"
			},
			{
				"durationId": 2,
				"durationLabel": "Day Rate",
				"durationPer": "Per Day",
				"rate": "80.00",
				"currency": "AUD"
			},
			{
				"durationId": 3,
				"durationLabel": "Week Rate",
				"durationPer": "Per Week",
				"rate": "80.00",
				"currency": "AUD"
			}
		]
	}]
}`

res.send(body);

});

contracts.post("/:hireNumber/map",(req,res) => {

    var body=`{
        "country": "au",
        "createdAt": "2018-10-15T07:30:00.0+10:00",
        "bpCustomerId": 1000001,
        "customerType": "account",
        "userId": 3281,
        "businessUnit": 46498,
        "startDateTime": "2018-10-16T18:30:00.0+10:00",
        "endDateTime": "2018-10-18T18:30:00.0+10:00",
        "status": "upcoming",
        "method": "delivery",
        "confirmationRequired": true,
        "confirmationReasons": ["DEL_AH"],
        "branchInfo": {
            "branchCode": 106,
            "branchName": "Kennards Hire Kellyville",
            "streetLine1": "35 Windsor Rd",
            "streetLine2": "",
            "suburb": "Kellyville",
            "state": "NSW",
            "postcode": 2756
        },
        "contactFirstName": "John",
        "contactLastName": "Doe",
        "contactPhone": "0444 999 888",
        "contactEmail": "johndoe@email.com",
        "accountInfo": {
            "purchaseOrderNumber": "56767",
            "option1Name": null,
            "option2Name": null,
            "option3Name": null,
            "option1Value": null,
            "option2Value": null,
            "option3Value": null
        },
        "deliveryAddress": {
            "streetLine1": "SE 2, Lv 6",
            "streetLine2": "24 Hickson Rd",
            "suburb": "Millers Point",
            "state": "NSW",
            "postcode": "2000",
            "country": "au"
        },
        "deliveryInstructions": "Lot 31. Call on arrival.",
        "subtotal": "1502.50",
        "discount": "280.50",
        "tax": "135.64",
        "deliveryAmount": "135.00",
        "pickupAmount": "135.00",
        "total": "1492.00",
        "depositPaid": "1492.00",
        "contractItems": [{
            "lineId": 1,
            "parentLineId": null,
            "itemCode": 270120,
            "typeId": 1,
            "itemName": "DEMOLITION SAW 230MM (9IN) CORDLESS",
            "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003517MAIN.png",
            "qty": 1,
            "chargeDurationId": 2,
            "chargeLabel": "Day Rate",
            "chargeDurationPer": "Per Day",
            "chargeRate": "100.00",
            "chargePeriod": "2.8",
            "derivedRateId": "1341032",
            "derivedRateClassification": "equip-rate",
            "discountPercentage": "0.00",
            "discountAmount": "237.50",
            "tax": "28.18",
            "lineTotal": "310.00",
            "durationRates": [{
                    "durationId": 1,
                    "durationLabel": "Half Day Rate",
                    "durationPer": "Per Half Day",
                    "rate": "80.00",
                    "currency": "AUD"
                },
                {
                    "durationId": 2,
                    "durationLabel": "Day Rate",
                    "durationPer": "Per Day",
                    "rate": "80.00",
                    "currency": "AUD"
                },
                {
                    "durationId": 3,
                    "durationLabel": "Week Rate",
                    "durationPer": "Per Week",
                    "rate": "80.00",
                    "currency": "AUD"
                }
            ]
        }]
    }`

    res.send(body);

});

contracts.post("/:hireNumber/endHire",(req,res) => {
    res.send("");

});

contracts.post("/:hireNumber/reportProblem",(req,res) => {
res.send("");

});

contracts.get("/:hireNumber/pdf",(req,res) => {
var body=`{
    "pdfByteArray": "VGhpcyBpcyBhbiBleGFtcGxlIHBkZiBieXRlIGFycmF5IGJhc2U2NCBlbmNvZGVkLCBob3dldmVyLCB0aGUgYWN0dWFsIGV4YW1wbGUgaXMgbXVjaCBsb25nZXIuIFRoaXMgZXhhbXBsZSBpcyAyODkgY2hhcmFjdGVycyBsb25nLCBob3dldmVyLCBhbiBhY3R1YWwgZXhhbXBsZSBpcyBhcm91bmQgMTIwLDAwMCBjaGFyYWN0ZXJzLiBLdWRvcyBmb3IgZGVjb2RlZCB0aGlzIGFuZCBmaW5kaW5nIHRoaXMgbWVzc2FnZSEgSGlnaC1maXZlISAtIE1hdHR5IEIgKHdyaXR0ZW4gb24gMjYvMDgvMjAxOCAxOjAwIFBNKQ=="
}

`

res.send(body);

});


module.exports= contracts;