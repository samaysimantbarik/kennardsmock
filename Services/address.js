const address= require('express').Router();

address.post("/",(req,res) =>{

    var response=`{
        "id": "51651087",
        "address": {
            "firstName": "John",
            "lastName": "Smith",
            "phoneNumber": "0412 345 678",
            "streetLine1": "SE 2, Lv 6",
            "streetLine2": "24 Hickson Rd",
            "suburb": "Millers Point",
            "city": "",
            "state": "NSW",
            "postcode": "2000",
            "country": "au",
            "isDefaultAddress": true
        }
    }`;
    res.status(201).send(response);
})


address.get("/",(req,res) =>{

    var response=`[{
        "id": "51651087",
        "address": {
            "firstName": "John",
            "lastName": "Smith",
            "phoneNumber": "0412 345 678",
            "streetLine1": "SE 2, Lv 6",
            "streetLine2": "24 Hickson Rd",
            "suburb": "Millers Point",
            "city": "",
            "state": "NSW",
            "postcode": "2000",
            "country": "au",
            "isDefaultAddress": true
        }
    }]`;
    res.status(200).send(response);
})

address.put("/:id",(req,res) =>{

    var response=` {
            "firstName": "${req.body.firstName}",
            "lastName": "${req.body.lastName}",
            "phoneNumber": "${req.body.phoneNumber}",
            "streetLine1": "${req.body.streetLine1}",
            "streetLine2": "${req.body.streetLine2}",
            "suburb": "${req.body.suburb}",
            "city": "${req.body.city}",
            "state": "${req.body.state}",
            "postcode": "${req.body.postcode}",
            "country": "${req.body.country}",
            "isDefaultAddress": ${req.body.isDefaultAddress}
        
    }`;
    res.status(200).send(response);
})

address.delete("/:id",(req,res) => {

    res.send("");
})
module.exports= address;