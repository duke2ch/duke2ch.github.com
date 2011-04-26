// TODO: TOC 自動生成やる。

$(function() {
    var URL = 'http://search.twitter.com/search.json?callback=?',
        tweets = [];

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
        var i = 0,
            len = tweets.length;
        for (i = 0; i < len; i++) {
            var postDate = new Date(tweets[i].created_at);
            tweets[i].created_at =  postDate;
        }
        tweets.sort(function(a, b) {
            return b.created_at - a.created_at
        });
    }
    function drawTweetsOnPage() {
        var i = 0,
            len = tweets.length;
        for (i = 0; i < len; i++) {
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

    $('header').attr('id', 'babe-' + Math.floor(Math.random() * 2));
    getSearchResults(URL,
        {'from': '3drealms', 'q': 'Duke OR Nukem OR DNF'},
        function() {
            getSearchResults(URL,
                {'from': 'GearboxSoftware', 'q': 'Duke OR Nukem OR DNF'},
                function() {
                     getSearchResults(URL,
                        {'from': '2KGames', 'q': 'Duke OR Nukem OR DNF'},
                        function() {
                            getSearchResults(URL,
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
