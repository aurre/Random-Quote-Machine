const colors = ['#42bcf4', '#95f441', '#f47041', '#db4c62', '#897fa5', '#d3aded', '#cbe5b0', '#608265' ];

let currentQuote;
let currentAuthor;
function getRandomColor(arr) {
    let index = Math.floor(Math.random() * Math.floor(arr.length));

    return arr[index]
}

function getQuote() {
    $.ajax({
        headers: {
            'X-Mashape-Key': 'kucXE9EouAmshUBd1XuCgCrvjQcVp1Kg4AHjsn4x0wAed3NEoS',
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=',
        success: function(r) {
            if (typeof r === 'string') {
                r = JSON.parse(r);
            }
            currentQuote = r.quote;
            currentAuthor = r.author;
            $('.quote-text').animate({
                opacity: 0
            }, 500,
            function() {
                $(this).animate({
                    opacity: 1
                }, 500);
                $('#text').text(currentQuote);
            });
            $('.quote-author').animate({
                opacity: 0
            }, 500,
            function() {
                $(this).animate({
                    opacity: 1
                }, 500);
                $('#author').text(currentAuthor);
            });

            let color = getRandomColor(colors);
            $('html body').animate({
                backgroundColor: color,
                color: color
            }, 1000);
            $('#tweet-quote,#tumblr-quote, #new-quote').animate({
                backgroundColor: color
            }, 1000)

        }
    })
}

$(function() {
    console.log('page loaded');
    $('#new-quote').on('click', getQuote);
});
