var express = require('express');

var app = express();

var db = [
    {
        "id": "500R0000004o37XIAQ",
        "number": "00189394",
        "subject": "Support case #3",
        "contact": "Test Admin",
        "status": "Open",
        "createdDate": "2014-10-03T10:10:07Z",
        "closedDate": "2014-10-03T10:10:07Z",
        "description": "check creation of SF support case  by admins",
        "comments": [
            {
                "user": "Test",
                "message": "Test message"
            },
            {
                "user": "Test",
                "message": "Second test message"
            }
        ]
    },
    {
        "id": "500R0000004o37SIAQ",
        "number": "00189393",
        "subject": "Support case #2",
        "contact": "Ira",
        "status": "Open",
        "createdDate": "2014-10-03T10:01:12Z",
        "closedDate": null,
        "description": "Check changing account name of a case creator  after renaming RA user"
    },
    {
        "id": "500R0000004o37NIAQ",
        "number": "00189392",
        "subject": "Support case #1",
        "contact": "Ira",
        "status": "Open",
        "createdDate": "2014-10-03T09:56:50Z",
        "closedDate": null,
        "description": "Check the creation of SF account"
    },
    {
        "id": "500R0000004maDTIAY",
        "number": "00189384",
        "subject": "Where is June 2014 data?",
        "contact": "Karl M",
        "status": "Open",
        "createdDate": "2014-09-04T15:06:23Z",
        "closedDate": null,
        "description": "I expected to see 6/14 data"
    },
    {
        "id": "500R0000004mVeiIAE",
        "number": "00189383",
        "subject": "Das ist zwei",
        "contact": "Karl M",
        "status": "Open",
        "createdDate": "2014-09-04T14:08:59Z",
        "closedDate": "2014-10-03T10:10:07Z",
        "description": "case two"
    },
    {
        "id": "500R0000004mNYIIA2",
        "number": "00189382",
        "subject": "I like RA",
        "contact": "Karl M",
        "status": "Open",
        "createdDate": "2014-08-29T10:36:32Z",
        "closedDate": null,
        "description": "RA Rocks!"
    },
    {
        "id": "500R0000004mIYSIA2",
        "number": "00189376",
        "subject": "Test case Vova",
        "contact": "Karl M",
        "status": "Open",
        "createdDate": "2014-08-28T15:33:28Z",
        "closedDate": null,
        "description": "VVP"
    },
    {
        "id": "500R0000004mHagIAE",
        "number": "00189370",
        "subject": "Das ist der Kase",
        "contact": "Karl M",
        "status": "Open",
        "createdDate": "2014-08-28T14:17:11Z",
        "closedDate": null,
        "description": "Das ist desk"
    },
    {
        "id": "500R0000004kchoIAA",
        "number": "00189359",
        "subject": "Test case Vova",
        "contact": "Karl M",
        "status": "Open",
        "createdDate": "2014-08-19T09:25:15Z",
        "closedDate": "2014-10-03T10:10:07Z",
        "description": "VVP"
    },
    {
        "id": "500R0000004kbjgIAA",
        "number": "00189353",
        "subject": "RiskAggregator inquiry 8/18/2014 9:16:37 AM",
        "contact": "Karl M",
        "status": "Open",
        "createdDate": "2014-08-18T13:15:36Z",
        "closedDate": "2014-10-03T10:10:07Z",
        "description": "From: Karl                                             M (SkyBridge) \nEmail: kmarx@daskapital.de \nPhone: +14875975 68 \nDas Kapital"
    }
];

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// delayed responses for
// simulation of a bad connection
//app.use(function(req, res, next){
//    setTimeout(next, 3000);
//});

app.get('/api/cases', function(req, res){
    var openCases = db.filter(function(currentCase){
        return currentCase.closedDate === null;
    }).map(function(item){
        return {
            number: item.number,
            subject: item.subject
        };
    });

    res.json(openCases);
});

app.get('/api/cases/closed', function(req, res){
    var closedCases = db.filter(function(currentCase){
        return currentCase.closedDate !== null;
    }).map(function(item){
        return {
            number: item.number,
            subject: item.subject
        };
    });

    res.json(closedCases);
});

app.get('/api/cases/:id', function(req, res){
    var caseDetail = db.filter(function (currentCase){
        return currentCase.number === req.params.id;
    }).map(function(item){
        return {
            subject: item.subject,
            description: item.description
        };
    });

    res.json(caseDetail[0]);
});

app.get('/api/cases/:id/comments', function(req, res){
    var findedCase = db.filter(function (currentCase){
        return currentCase.number === req.params.id;
    });

    res.json(findedCase[0].comments);
});


app.listen(3000);