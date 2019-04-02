var router= require('express').Router();

router.post("/", (req,res) =>{

    var responseBody=`{
        "subtotal": 350.00,
        "depositPayable": "520.00",
        "deliveryAmount": "85.00",
        "pickupAmount": "85.00",
        "discount": "0.00",
        "tax": 47.27,
        "total": 520.00,
        "totalsItems": [{
                "lineId": 20589,
                "chargeRateNumber": 2,
                "chargeRateDescription": "Day Rate",
                "chargeRateLabel": "Per Day",
                "chargeRate": "100.00",
                "chargePeriod": "2",
                "discount": "0.00",
                "tax": "28.18",
                "lineTotal": "310.00"
            },
            {
                "lineId": 21696,
                "chargeRateNumber": 2,
                "chargeRateDescription": "Day Rate",
                "chargeRateLabel": "Per Day",
                "chargeRate": "100.00",
                "chargePeriod": "2",
                "discount": "0.00",
                "tax": "3.64",
                "lineTotal": "40.00"
            }
        ]
    }`

    res.send(responseBody);


});


module.exports=router;