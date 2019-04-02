var router= require('express').Router();

router.get("/", (req,res) =>{

    var responseBody=`{
        "content": [{
            "title": "Timber Floor Preparation",
            "shortDescription": "How to sand your timber floors in preparation for staining",
            "categories": [{
                    "catId": "get_inspired",
                    "catName": "Get Inspired"
                },
                {
                    "catId": "kh_news",
                    "name": "Kennards Hire News"
                }
            ],
            "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/content/articles/howtosand.png",
            "url": "www.kennards.com.au/get-inspired/how-to-sand.html",
            "createdAt": "2018-10-16T18:30:00.0+10:00",
            "featured": true,
            "priority": 21
        }],
        "pagination": {
            "count": 30,
            "total": 1,
            "offset": 0,
            "links": [{
                    "rel": "self",
                    "href": "http://example.apiendpoint.com/content?limit=30&offset=0"
                },
                {
                    "rel": "first",
                    "href": "http://example.apiendpoint.com/content?limit=30&offset=0"
                },
                {
                    "rel": "prev",
                    "href": null
                },
                {
                    "rel": "next",
                    "href": "http://example.apiendpoint.com/content?limit=30&offset=30"
                },
                {
                    "rel": "last",
                    "href": "http://example.apiendpoint.com/content?limit=30&offset=270"
                }
            ]
        }
    }`

    res.send(responseBody);


});


module.exports=router;