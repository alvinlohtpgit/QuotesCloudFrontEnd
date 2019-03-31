exports.index = function(req , res){
    res.render('index');
}

exports.addquote = function(req, res){
    res.render('addquote');
}

exports.processAddquote = function(req , res){

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

    

}