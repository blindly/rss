    google.load("feeds", "1");

    function initialize() {
        var feeds = [
            'http://blogs.opera.com/desktop/feed/',
            'https://vivaldi.net/blogs/teamblog?format=feed&type=rss',
            'https://news.ycombinator.com/rss',
            'http://feeds2.feedburner.com/thenextweb',
            'http://www.theverge.com/rss/frontpage'
        ]

        feeds.forEach(function(entry) {
            var feed = new google.feeds.Feed(entry);
            feed.load(function(result) {
                if (!result.error) {
                    for (var i = 0; i < result.feed.entries.length; i++) {
                        var entry = result.feed.entries[i];
                        var title = entry.title;
                        var link = entry.link;
                        var article_layout = "<div class='article'><a class='title' href='" + link + "'>" + title + "</a></div>";

                        $('#news').append(article_layout);
                    }
                }
            });
        });
    }

    google.setOnLoadCallback(initialize);