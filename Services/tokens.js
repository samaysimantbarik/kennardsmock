var router= require('express').Router();

router.post("/", (req,res) =>{

    

    res.status(201).send("");


});

router.get("/", (req,res) =>{

    var body=`[{
        "country": "au",
        "bpCustomerId": 176,
        "customerType": "account",
        "userId": "3281",
        "gateway": "bpoint",
        "token": "5999992545449365",
        "maskedNumber": "XXXXXXXX1234",
        "cardName": "Taylor Hawkins",
        "cardType": "Visa",
        "cardExpiry": "11/20",
        "hireNumber": 102658
    }]`

    res.status(200).send(body);


});

router.delete("/:id", (req,res) =>{

    

    res.status(200).send("");


});


module.exports= router;

