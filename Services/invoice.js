var router= require('express').Router();

router.get("/", (req,res) =>{

    var responseBody=`{
        "country": "au",
        "bpCustomerId": "176",
        "type": "account",
        "createdDate": "2018-10-16T18:30:00.0+10:00",
        "paymentMethod": "token",
        "gateway": "bpoint",
        "gatewayTransactionId": "258467923",
        "paymentAmount": "156.20",
        "token": "5999992545449365",
        "paymentLines": [{
            "invoiceNumber": null,
            "hireNumber": 1839,
            "paymentAmount": "156.20"
        }]
    }`

    res.send(responseBody);


});

router.get("/:id/pdf", (req,res) =>{

    var responseBody=`{
        "pdfByteArray": "VGhpcyBpcyBhbiBleGFtcGxlIHBkZiBieXRlIGFycmF5IGJhc2U2NCBlbmNvZGVkLCBob3dldmVyLCB0aGUgYWN0dWFsIGV4YW1wbGUgaXMgbXVjaCBsb25nZXIuIFRoaXMgZXhhbXBsZSBpcyAyODkgY2hhcmFjdGVycyBsb25nLCBob3dldmVyLCBhbiBhY3R1YWwgZXhhbXBsZSBpcyBhcm91bmQgMTIwLDAwMCBjaGFyYWN0ZXJzLiBLdWRvcyBmb3IgZGVjb2RlZCB0aGlzIGFuZCBmaW5kaW5nIHRoaXMgbWVzc2FnZSEgSGlnaC1maXZlISAtIE1hdHR5IEIgKHdyaXR0ZW4gb24gMjYvMDgvMjAxOCAxOjAwIFBNKQ=="
    }
    
    `

    res.send(responseBody);


});


module.exports=router;