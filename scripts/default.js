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
            $('#twitter').slideDown(400).css('display', 'block');
        }
    }

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

    $('header').attr('id', 'babe-' + Math.floor(Math.random() * 2));
    $("article").prepend('<section id="toc"><p>▽ 目次</p></section>');
    $("#toc").bind("click", function () {
        /**
         * TOC generator
         * @see http://www.mikage.to/jquery/js/jquery_site.js
         */
        var assigned_level = 0,
            current_level = 0,
            id_number = 1,
            parent_node = "article",
            toc_html = "";

        $(parent_node).children().each(function () {
            if (this.nodeName.length === 2 && this.nodeName.charAt(0) === "H") {
                $(this).attr("class", "heading");
            }
        });

        $(".heading").each(function () {
            current_level = this.nodeName.charAt(1);

            $(this).attr("id", "toc-" + id_number);

            // Close a list if a same level list follows.
            if (assigned_level !== current_level - 1) {
                toc_html += "</li>"
            }

            // Open parent lists if a child list follows.
            while (assigned_level < current_level) {
                toc_html += "<ol>";
                assigned_level += 1;
            }

            // Close child lists and the parent list if
            // the same level parent list follows.
            while (assigned_level > current_level) {
                toc_html += "</ol></li>";
                assigned_level -= 1;
            }

            toc_html += 
                '<li><a href="#' + this.id + '">' + $(this).text() + "</a>";
            id_number += 1;
        });

        // Close everything
        while (assigned_level > 0) {
            toc_html += "</li></ol>";
            assigned_level -= 1;
        }

        $(".heading").append('<a href="#top" class="toc">△</a>');
        $("#toc").unbind("click");
        $("#toc").append(toc_html);
    });
})();
