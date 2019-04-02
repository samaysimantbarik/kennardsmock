var router= require('express').Router();

router.post("/",(req,res) =>{
    var responseBody=`{
        "availability": "Items Available",
        "branchCode": 1992,
        "branchName": "KENNARDS HIRE KELLYVILLE",
        "reasons": [
            {
                "reasonCode": "COL_AVAIL",
                "notification": "Good News, this item is available for collection at your preferred branch.",
                "message": "",
                "priority": 1
            }
        ],
        "recommendations": []
    }
    
    `;

    res.send(router);
})

module.exports= router;