//const express= require('express');

var router= require('express').Router();
var favourites= require("./favouriteproducts");
var address= require("./address");
var cart= require("./cart");

router.use("/:id/favouriteproducts", function(req, res, next) {
    req.id = req.params.id;
    next()
  }, favourites);
  router.use("/:id/addresses",address);
  router.use("/:id/cart",cart);

router.post("/",function(req,res){

    //var request= JSON.parse(req);
    var cashCustomerId="";
    var company="";
    var min=1000; 
    var max=9999999999;  
    var id =Math.floor(Math.random() * (+max - +min)) + +min;
    console.log("country"+req.body.country);
    var country=req.body.country;
    var type= req.body.type;
    if(typeof(type) =='undefined'){
        console.log("Type is:"+type);
        type='cash';
    }
    if(type=='cash'){
         cashCustomerId="1234";
         company="AHQ";
    }
    var role= req.body.role;

var responseBody=`{
    
    "id": ${id},
    "user": {
        "firstName": "${req.body.firstName}",
        "lastName": "Bowolick",
        "email": "${req.body.email}",
        "phoneNumber": "0412345678",
        "type": "${type}",
        "cashCustomerId": "${cashCustomerId}",
        "company": "${company}",
        "accountCode": 1000001,
        "role": "${role}",
        "masterBusinessUnit": "",
        "preferredBranch": 1992,
        "preferredBusinessUnit": 22,
        "country": "${country}"
    }
}`;

res.status(201).send(responseBody);


})

router.get("/",function(req,res){
 console.log("Inside get users");
    var email= req.query.email;
    var country= req.query.CountryType;
    console.log("Email is :"+ email);
    console.log(typeof(email));
    var responseBody= `{
        "id": "3281",
        "user": {
            "firstName": "Matthew",
            "lastName": "Bowolick",
            "email": "${email}",
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
        }
    }`;
    res.send(responseBody);
    })

    router.get("/:id",function(req,res){
        console.log("Inside get users byid");
      var id= req.params.id;

      if(id== 'forgotPassword'){
         res.status(200).send("");
      }
      else{
        var responseBody= ` {
                "firstName": "Matthew",
                "lastName": "Bowolick",
                "email": "test1234@email.com",
                "phoneNumber": "0412345678",
                "type": "account",
                "cashCustomerId": "",
                "company": "",
                "accountCode": 1000001,
                "role": "Master",
                "masterBusinessUnit": "",
                "preferredBranch": 1992,
                "preferredBusinessUnit": 22,
                "country": "au"
            
        }`;
        res.send(responseBody);
    }
        })


    router.put("/:id",function(req,res){

        var id= req.params.id;
            var responseBody= ` {
                    "firstName": "Matthew",
                    "lastName": "Bowolick",
                    "email": "test1234@email.com",
                    "phoneNumber": "0412345678",
                    "type": "account",
                    "cashCustomerId": "",
                    "company": "",
                    "accountCode": 1000001,
                    "role": "Master",
                    "masterBusinessUnit": "",
                    "preferredBranch": 1992,
                    "preferredBusinessUnit": 22,
                    "country": "au"
                
            }`;
            res.send(responseBody);
            })


    router.patch("/:id",function(req,res){

        var id= req.params.id;
            var responseBody= ` {
                    "firstName": "Matthew",
                    "lastName": "Bowolick",
                    "email": "test1234@email.com",
                    "phoneNumber": "0412345678",
                    "type": "account",
                    "cashCustomerId": "",
                    "company": "",
                    "accountCode": 1000001,
                    "role": "Master",
                    "masterBusinessUnit": "",
                    "preferredBranch": 1992,
                    "preferredBusinessUnit": 22,
                    "country": "au"
                
            }`;
           res.send(responseBody);
            });

    router.put("/:id/changePassword",function(req,res){

            res.status(200).send();
            });

    router.post("/:id/login",function(req,res){

     
            res.status(200).send();
            });

    router.get("/forgotPassword/",function(req,res){

         console.log("inside forgot password");
        res.status(400).send("HELLO");
        });

    

    module.exports= router;