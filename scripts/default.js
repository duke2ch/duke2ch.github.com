$(function() {
    // TODO: TOC 自動生成やる。

    var tweets = new Array();
    var url = 'http://api.twitter.com/1/statuses/user_timeline' +
    '.json?callback=?';
$.getJSON(url, {'id': '2kgames','count': 10}, function(data, status) {
    $.each(data, function(i, item) {
        if (item.text.match(/(Duke)|(Nukem)|(DNF)/gi)) {
            tweets.push(item);
        }
    });
    $.getJSON(url, {'id': 'gearboxsoftware','count': 10}, function(data, status) {
        $.each(data, function(i, item) {
            if (item.text.match(/(Duke)|(Nukem)|(DNF)/gi)) {
                tweets.push(item);
            }
        });
        $.getJSON(url, {'id': '3drealms','count': 10}, function(data, status) {
            $.each(data, function(i, item) {
                if (item.text.match(/(Duke)|(Nukem)|(DNF)/gi)) {
                    tweets.push(item);
                }
            });
            for (var i = 0; i < tweets.length; i++) {
                var postDate = new Date(tweets[i].created_at);
                tweets[i].created_at =  postDate;
            }
            tweets.sort(function(a, b) {
                return b.created_at - a.created_at
            });
            for (var i = 0; i < tweets.length; i++) {
                var text = tweets[i].text
            .replace(/(s?https?:\/\/[-_.!~*'()a-za-z0-9;\/?:\@&=+\$,%#]+)/g, '<a href="$1" target="_blank">$1</a>')
            .replace(/#((?![a-z0-9]+;)[A-Za-z0-9_]+)/gi, '<a href="http://twitter.com/search/%23$1" target="_blank">&#035;$1</a>')
            .replace(/@([A-Za-z0-9_]{1,14}(?![a-z0-9_]))/g, '<a href="http://twitter.com/$1" target="_blank">@$1</a>')
            $('#twitter ul').append(
                '<li><a href="http://twitter.com/' + 
                tweets[i].user.screen_name + '/status/' + 
                tweets[i].id_str + '"><strong>' +
                tweets[i].user.name + '</strong></a>: ' +
                text + '</li>');
        $('#twitter').css('display', 'block');
            }
        });
    });
});
});
