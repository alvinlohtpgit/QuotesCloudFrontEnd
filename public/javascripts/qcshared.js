$(document).ready(function(){

    // Init the spinner
    var loading = $.loading();

    var is_root = location.pathname == "/"; 

    if (is_root == true){
        // On page load, we want to load the latest quote
        loading.open();
        $.ajax({
            method: "GET",
            url: "https://mantraquote.azurewebsites.net/api/getLatestQuote?code=AI2vOgu85itS/WJ0EoNGamjmSfjEEMYT7VC6CGk4nrSW5gCgNYJ2Dg==",
            dataType: "json"
        })
        .done(function(result){
            loading.close();
            populateDisplay(result , "Latest");
        });
    }

    function populateDisplay(quote,searchType){
        // Update the interface
        $('.pagetitle').html(searchType + ' Quote on QuotesCloud');
        $('.quotebody').html(quote.message);
        $('.quoteauthor').html(quote.author);

        // Form the tags
        var tagDisplay = ""; 
        quote.tags.forEach(function(currentTag){
            tagDisplay = tagDisplay + ", " + currentTag; 
        });

        tagDisplay = tagDisplay.substr(2);

        $('.quotetags').html('Tagged: ' + tagDisplay);

        var momentDate = moment(quote.createdon);

        // Submitter string
        var submitterDisplay = 'Submitted by ' + quote.submitter + ' ' + momentDate.fromNow();
        $('.quotesubmitter').html(submitterDisplay);
    }


    // Clicked on the random quote
    $('a#randomquotelink').click(function(){
        loading.open();
        $.ajax({
            method: "GET",
            url: "https://mantraquote.azurewebsites.net/api/getRandomQuote?code=gl9YDYcBtl/mLJ6BJbSearqOr8aFZyiaW0WD4b6rIPvTPOjL3WQIqA==",
            dataType: "json"
        })
        .done(function(result){
            loading.close();
            var quote = result[0];
            populateDisplay(quote, "Random");
        });

    });

    
    $("a#addquote").click(function(){
        alert('Not implemented yet');
    });

    // Click on the latest quote button
    $('a#latestquotelink').click(function(){
       
        loading.open();
        $.ajax({
            method: "GET",
            url: "https://mantraquote.azurewebsites.net/api/getLatestQuote?code=AI2vOgu85itS/WJ0EoNGamjmSfjEEMYT7VC6CGk4nrSW5gCgNYJ2Dg==",
            dataType: "json"
        })
        .done(function(result){
            loading.close();
            populateDisplay(result , "Latest");
        });
    });




});