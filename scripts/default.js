// TODO: TOC 自動生成やる。

var tl_url = 'http://api.twitter.com/1/statuses/user_timeline.json?callback=?';
var tweets = new Array();

function getSearchResults(search_url, search_queries, callback) {
    $.getJSON(search_url, search_queries,
        function(data, status) {
            $.each(data.results, function(i, item) {
                tweets.push(item);
            });
            callback();
        }
    );
}

function sortTweetsByDate() {
    for (var i = 0; i < tweets.length; i++) {
        var postDate = new Date(tweets[i].created_at);
        tweets[i].created_at =  postDate;
    }
    tweets.sort(function(a, b) {
        return b.created_at - a.created_at
    });
}

function drawTweetsOnPage() {
    for (var i = 0; i < tweets.length; i++) {
        var text = tweets[i].text
            .replace(/(s?https?:\/\/[-_.!~*'()A-Za-z0-9;\/?:\@&=+\$,%#]+)/g,
                '<a href="$1" target="_blank">$1</a>')
            .replace(/#((?![a-z0-9]+;)[A-Za-z0-9_]+)/gi,
                '<a href="http://twitter.com/search/%23$1" target="_blank">&#035;$1</a>')
            .replace(/@([A-Za-z0-9_]{1,14}(?![a-z0-9_]))/g,
                '<a href="http://twitter.com/$1" target="_blank">@$1</a>');
    $('#twitter ul').append(
        '<li><a href="http://twitter.com/' + 
        tweets[i].from_user + '/status/' + 
        tweets[i].id_str + '"><strong>@' +
        tweets[i].from_user + '</strong></a>: ' +
        text + '</li>');
    $('#twitter').fadeIn(400).css('display', 'block');
    }
}

$(function() {
    var url = 'http://search.twitter.com/search.json?callback=?';
    getSearchResults(url,
        {'from': '3drealms', 'q': 'Duke OR Nukem OR DNF'},
        function() {
            getSearchResults(url,
                {'from': 'GearboxSoftware', 'q': 'Duke OR Nukem OR DNF'},
                function() {
                     getSearchResults(url,
                        {'from': '2KGames', 'q': 'Duke OR Nukem OR DNF'},
                        function() {
                            getSearchResults(url,
                                {'lang': 'ja', 'q': 'Duke Nukem'},
                                function() {
                                    sortTweetsByDate();
                                    drawTweetsOnPage();
                                }
                            );
                        }
                    );
                }
            );
        }
    );
});
