var express= require('express');

var favourites= express.Router();

favourites.post("/:itemcode",function(req,res){

    var responseBody=`[{
        "itemCode": 123,
        "itemType": 1,
        "packageType": 2,
        "itemName": "HAMMER DEMOLITION - MEDIUM (T HANDLE)",
        "stockedAtBranch": true,
        "categories": [{
                "categoryId": 6,
                "name": "Tools"
            },
            {
                "categoryId": 202,
                "name": "Hammers & Breakers"
            }
        ],
        "isPreProductDetailPage": false,
        "isBundle": true,
        "isPriceOnApplication": false,
        "fromRate": {
            "rateNumber": 2,
            "description": "Day Rate",
            "label": "Per Day",
            "rate": "145.00",
            "currency": "AUD"
        },
        "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003517MAIN.png",
        "priority": 1
    }]`;
    res.send(responseBody);
})


favourites.get("/",function(req,res){

    var responseBody=`[{
        "itemCode": 123,
        "itemType": 1,
        "packageType": 2,
        "itemName": "HAMMER DEMOLITION - MEDIUM (T HANDLE)",
        "stockedAtBranch": true,
        "categories": [{
                "categoryId": 6,
                "name": "Tools"
            },
            {
                "categoryId": 202,
                "name": "Hammers & Breakers"
            }
        ],
        "isPreProductDetailPage": false,
        "isBundle": true,
        "isPriceOnApplication": false,
        "fromRate": {
            "rateNumber": 2,
            "description": "Day Rate",
            "label": "Per Day",
            "rate": "145.00",
            "currency": "AUD"
        },
        "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003517MAIN.png",
        "priority": 1
    }]`;
    res.send(responseBody);
})

favourites.delete("/:itemcode",function(req,res){

    
    res.send("");
})


module.exports=favourites;

