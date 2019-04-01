const cart= require('express').Router();

var response= `{
    "startDateTime": "2018-10-16T18:30:00.0+10:00",
    "endDateTime": "2018-10-18T18:30:00.0+10:00",
    "method": "Collect",
    "confirmationRequired": true,
    "confirmationDetails": [{
        "confirmationReasonCode": "COL_UNAVAIL",
        "confirmationMessage": "Requires Confirmation – Kennards Hire to Confirm"
    }],
    "branchCode": 1992,
    "branchName": "KENNARDS HIRE KELLYVILLE",
    "deliveryAddress": {
        "streetLine1": "SE 2, Lv 6",
        "streetLine2": "24 Hickson Rd",
        "suburb": "Millers Point",
        "city": "",
        "state": "NSW",
        "postcode": "2000",
        "country": "AU"
    },
    "pickUpStatus": false,
    "promoCode": "KH15",
    "convertToDeliveryCharge": "50.00",
    "subtotal": "350.00",
    "depositPayable": "520.00",
    "deliveryAmount": "85.00",
    "pickupAmount": "85.00",
    "discount": "0.00",
    "tax": "47.27",
    "total": "520.00",
    "cartItems": [{
        "lineId": 20589,
        "parentLineId": null,
        "itemCode": 270120,
        "itemType": 1,
        "itemName": "DEMOLITION SAW 230MM (9IN) CORDLESS",
        "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003517MAIN.png",
        "quantity": 1,
        "chargeRateNumber": 2,
        "chargeRate": "100.00",
        "chargePeriod": "2.8",
        "discount": "0.00",
        "tax": "28.18",
        "lineTotal": "310.00",
        "rates": [{
                "rateNumber": 1,
                "description": "Half Day Rate",
                "label": "Per Half Day",
                "rate": "80.00",
                "currency": "AUD"
            },
            {
                "rateNumber": 2,
                "description": "Day Rate",
                "label": "Per Day",
                "rate": "80.00",
                "currency": "AUD"
            },
            {
                "rateNumber": 3,
                "description": "Week Rate",
                "label": "Per Week",
                "rate": "80.00",
                "currency": "AUD"
            }
        ],
        "derivedRateId": 43909109,
        "derivedRateClassification": "equip-rate",
        "derivedRateType": "P"
    }]
}`;

cart.get("/",(req,res) => {

  

    //var response2=`{}`;
    res.send(response);

});

cart.put("/",(req,res) => {
    res.send(response);

});

cart.delete("/",(req,res) => {
    res.send("");

});

module.exports= cart;