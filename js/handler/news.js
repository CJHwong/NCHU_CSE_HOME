function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    })
}

function bindPost(data) {
    "use strict";
    var postList = $("#post-list");
    var li, a, span;
    var i, len;
    for (i = data.length - 1, len = data.length - 6; i > len; i -= 1) {
        a = $("<a/>");
        a
            .text(data[i].subject)
            .attr("href", "?id=" + data[i]["nno"] + "#news");
        span = $("<span/>");
        span.text(data[i].post_date);
        li = $("<li/>");
        li
            .addClass("post")
            .append(span)
            .append(a);
        postList.append(li);
    }
};

function bindNews(data) {
    "use strict";
    var currentM = -1;
    var date;
    var monthKey = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    var news = $("#news");
    var ul, li, a, span, context, div;
    var i, len;
    ul = $("<ul/>", {
        "class": "news-list"
    });

    if (savedNews == undefined) {
      savedNews = data;
    } else {
      data = savedNews;
    }

    for (i = data.length - 1 - start, len = data.length - 1 - end; i > len; i -= 1) {
        a = $("<a/>", {
            "text": data[i].subject
        });

        span = $("<span/>", {
            "text": data[i].post_date
        });

        context = $("<pre/>", {
            "class": "news-text",
            "html": urlify(data[i].text)
        });
        div = $("<div/>").append(a).append(span).append(context);
        li = $("<li/>").append(div);

        if (data[i].file_name != "") {
            div.append($("<a>").text("點此下載附件").addClass("file-link").attr("href", "http://www.cs.nchu.edu.tw/news_file/" + data[i].file_name));
        }

        li.bind("click", function(e) {
            if ($(e.target).attr("opened") === "true") {
                $($(e.target).parent().children()[2]).css("display", "none");
                $(e.target).attr("opened", "false")
            } else {
                $($(e.target).parent().children()[2]).css("display", "block");
                $(e.target).attr("opened", "true")
            }
        })

        date = new Date(data[i].post_date.split(" ")[0]);
        if ((date.getMonth()) != currentM && i - 1 != len) {
            var brand = $("<div/>", {
                "class": "card-brand"
            })
            brand.html($("<span/>", {
                text: monthKey[date.getMonth()] + " " + date.getFullYear()
            }));

            news
                .append(ul)
                .append(brand);

            currentM = date.getMonth();
            ul = $("<ul/>", {
                "class": "news-list"
            });
        }
        ul.append(li);
    }
    news.append(ul);

    start = start + end;
    end = end + end;
    if (end >= data.length) {
        start = end;
    }
};

function bindNewsItem(data) {
    "use strict";
    data = data[0];
    var news = $("#news");
    var ul, li, a, span, context, aFile, div;
    ul = $("<ul/>", {
        "class": "news-list"
    });

    a = $("<a/>", {
        "text": data.subject
    });
    span = $("<span/>", {
        "text": data.post_date
    });
    context = $("<pre/>", {
        "class": "news-text",
        "id": data.nno,
        "html": urlify(data.text)
    });
    aFile = $("<a class='file-link'/>");
    if (data.file_name != "") {
        aFile.text("點此下載附件");
        aFile.attr("href", "http://www.cs.nchu.edu.tw/news_file/" + data.file_name)
    }

    div = $("<div id='post-content'/>")
        .append(a)
        .append(span)
        .append(context.append($("<br>")).append(aFile));

    $(div.children()[2]).css("display", "block");


    li = $("<li/>").append(div);

    news.append(ul.append(li));
}

function bindHonor(data) {
    "use strict";
    var currentM = -1;
    var date;
    var monthKey = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    var news = $("#honor");
    var ul, li, a, span, context, div;
    var i, len;
    ul = $("<ul/>", {
        "class": "news-list"
    });

    if (savedHonor == undefined) {
      savedHonor = data;
    } else {
      data = savedHonor;
    }

    for (i = data.length - 1 - start, len = data.length - 1 - end; i > len; i -= 1) {
        div = $("<div/>");
        a = $("<pre/>", {
                "text": data[i].text
            }).css("background-color", "white")
            .css("border", "none")
            .css("white-space", "pre-wrap");

        li = $("<li/>").append(a).append(span);

        date = new Date(data[i].post_date.split(" ")[0]);
        if ((date.getMonth()) != currentM && i - 1 != len) {
            var brand = $("<div/>", {
                "class": "card-brand"
            })
            brand.html($("<span/>", {
                text: monthKey[date.getMonth()] + " " + date.getFullYear()
            }));
            news
                .append(ul)
                .append(brand);
            currentM = date.getMonth();
            ul = $("<ul/>", {
                "class": "news-list"
            });
        }
        div.append(li);
        ul.append(div);
    }
    news.append(ul);

    start = start + end;
    end = end + end;
    if (end >= data.length) {
        start = end;
    }
};
