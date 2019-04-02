var router= require('express').Router();

router.get("/", (req,res) =>{

    var body=`{
        "equipment": {
            "categoryResults": [{
                    "catId": 6,
                    "name": "Tools",
                    "priority": 1
                },
                {
                    "catId": 202,
                    "name": "Hammers & Breakers",
                    "priority": 2
                },
                {
                    "catId": 25,
                    "name": "Saws",
                    "priority": 3
                }
            ],
            "productResults": {
                "products": [{
                        "itemCode": 9003231,
                        "itemName": "Clay Spade - Hammer Light / Medium",
                        "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003231MAIN.png",
                        "priority": 1
                    },
                    {
                        "itemCode": 9003231,
                        "itemName": "Floor Sander - Orbital",
                        "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003231MAIN.png",
                        "priority": 1
                    },
                    {
                        "itemCode": 9003231,
                        "itemName": "Chainsaw - 300mm (12IN) Petrol",
                        "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/equipment/9/0/0/9003231MAIN.png",
                        "priority": 1
                    }
                ],
                "pagination": {
                    "count": 10,
                    "total": 92,
                    "offset": 0,
                    "links": [{
                            "rel": "self",
                            "href": "http://example.apiendpoint.com/search?query=saw&comp=products&limit=10&offset=0"
                        },
                        {
                            "rel": "first",
                            "href": "http://example.apiendpoint.com/search?query=saw&comp=products&limit=10&offset=0"
                        },
                        {
                            "rel": "prev",
                            "href": null
                        },
                        {
                            "rel": "next",
                            "href": "http://example.apiendpoint.com/search?query=saw&comp=products&limit=10&offset=10"
                        },
                        {
                            "rel": "last",
                            "href": "http://example.apiendpoint.com/search?query=saw&comp=products&limit=10&offset=90"
                        }
                    ]
                }
            }
        },
        "related": {
            "contentResults": [{
                    "category": "BLOG",
                    "articles": [{
                        "title": "How to <b>Sa</b>nd your Timber Floors in Preparation for...",
                        "url": "https://www.kennards.com.au/content/blog/howtosand.html",
                        "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/content/articles/howtosand.png",
                        "priority": 1
                    }]
                },
                {
                    "category": "HOW TO'S",
                    "articles": [{
                            "title": "How to Prep your Timber Floors for <b>Sa</b>nding...",
                            "url": "https://www.kennards.com.au/content/blog/howtoprep.html",
                            "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/content/articles/howtosand.png",
                            "priority": 1
                        },
                        {
                            "title": "How to <b>Sa</b>nd your Timber Floors in Preparation for...",
                            "url": "https://www.kennards.com.au/content/blog/howtosand.html",
                            "thumbnail": "https://cdn-medialibrary.kennards.com.au/media/content/articles/howtosand.png",
                            "priority": 2
                        }
                    ]
                }
            ],
            "pagination": {
                "count": 10,
                "total": 92,
                "offset": 0,
                "links": [{
                        "rel": "self",
                        "href": "http://example.apiendpoint.com/search?query=saw&comp=articles&limit=10&offset=0"
                    },
                    {
                        "rel": "first",
                        "href": "http://example.apiendpoint.com/search?query=saw&comp=articles&limit=10&offset=0"
                    },
                    {
                        "rel": "prev",
                        "href": null
                    },
                    {
                        "rel": "next",
                        "href": "http://example.apiendpoint.com/search?query=saw&comp=articles&limit=10&offset=10"
                    },
                    {
                        "rel": "last",
                        "href": "http://example.apiendpoint.com/search?query=saw&comp=articles&limit=10&offset=90"
                    }
                ]
            }
        }
    }`

    res.status(200).send(body);


});

module.exports= router;