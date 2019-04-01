var request = require('request');

exports.index = function(req , res){
    res.render('index');
}

exports.addquote = function(req, res){
    res.render('addquote');
}

exports.processAddquote = function(req , res){
    console.log("Called process Add quote ");
   
    // Get all the posted variables
    var posted_Message = req.body.message;
    var posted_Author = req.body.author;
    var posted_Tags = req.body.tags;
    var posted_Submitter = req.body.submitter;

    var quotePayload = {};

    quotePayload.message = posted_Message;
    
    if (posted_Author != ''){
        quotePayload.author = posted_Author;
    }

    if (posted_Tags != ''){
        var tagArray = posted_Tags.split(',');

        quotePayload.tags = [];
        
        tagArray.forEach(function(currentTag){
            quotePayload.tags.push(currentTag.trim());
        });
    }

    if (posted_Submitter != ''){
        quotePayload.submitter = posted_Submitter;
    }

    // Push an async record to request
    var azureAddFunctionURL = 'https://mantraquote.azurewebsites.net/api/writeToCloudDB?code=aypaxgB4ChpVa/VE84qtXTkM8H4Mv1tRTpCr0VfC7jEf49EjbsCZbw==';

    var options = {
        method: 'POST',
        body: quotePayload,
        json: true,
        headers: {
            'Content-Type': 'application/json',
        },
        url: azureAddFunctionURL
    }
   
    
    request(options, function (err, response){
        if (err){
            console.log("Err posting : " + err);
        }
        console.log("Add successful");
        console.log("Response : " + JSON.stringify(response));
        // done posting, redirect to the main page
        res.redirect('/');
    });
    
}