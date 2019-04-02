var router= require('express').Router();

router.get("/", (req,res) =>{

    var responseBody=`[{
        "catId": "get_inspired",
        "catName": "Get Inspired",
        "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/content/categories/getInspired.png",
        "priority": 21
    }]`

    res.send(responseBody);


});


module.exports=router;