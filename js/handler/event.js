function bindEventList(data) {
    "use strict";
    var postList = $("#event-list");
    var date;
    var li, a, table;
    var i, len;
    for (i = data.length - 1, len = data.length; i > len - 4; i -= 1) {
        date = data[i].post_date.split(" ");

        a = $("<a/>");
        a
            .text(data[i].title)
            .attr("href", "?id=" + data[i]["nno"] + "#event");

        table = $("<table/>");
        table
            .append($("<tr/>").append($("<td/>", {
                    "text": "講者"
                }))
                .append($("<td/>", {
                    "text": data[i].speaker
                })))
            .append($("<tr/>").append($("<td/>", {
                    "text": "日期"
                }))
                .append($("<td/>", {
                    "text": date[0] + " | " + date[1]
                })))
            .append($("<tr/>").append($("<td/>", {
                    "text": "地點"
                }))
                .append($("<td/>", {
                    "text": data[i].place
                })));

        li = $("<li/>");
        li
            .addClass("event")
            .append(a)
            .append(table);
        postList.append(li);
    }
};

function bindEvent(data) {
    "use strict";
    var currentM = -1;
    var date;
    var monthKey = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    var news = $("#event");
    var ul, li, a, span, context, div;
    var i, len;
    ul = $("<ul/>", {
        "class": "event-list"
    });

    if (savedEvent == undefined) {
      savedEvent = data;
    } else {
      data = savedEvent;
    }

    for (i = data.length - 1 - start, len = data.length - 1 - end; i > len; i -= 1) {
        a = $("<a/>", {
            "text": data[i].title,
            "href": window.location.toString().split("#")[0] + "?id=" + data[i].nno + "#event"
        });

        span = $("<span/>", {
            "text": data[i].post_date.split(" ")[0]
        });

        context = $("<pre>").text("講者：" + data[i].speaker + "\n地點：" + data[i].place);

        div = $("<div/>").append(a).append(span).append(context);
        li = $("<li/>").append(div);

        if (data[i].file_name !== "") {
            div.append($("<a>").text("投影片下載").addClass("file-link").attr("href", "http://www.cs.nchu.edu.tw/seminar/" + data[i].file_name));
        }

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
                "class": "event-list"
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

function bindEventItem(data) {
    "use strict";
    data = data[0];
    var news = $("#event");
    var ul, li, a, context, div;
    var i, len;

    ul = $("<ul/>", {
        "class": "event-list"
    });

    a = $("<a/>", {
        "text": data.title
    });

    context = $("<pre>");
    context.text("講者：" + data.speaker + "\n\n地點：" + data.place + "\n\n日期：" + data.post_date);

    div = $("<div/>").append(a).append(context);
    li = $("<li/>").append(div);

    if (data.file_name !== "") {
        div.append($("<a>").text("投影片下載").addClass("file-link").attr("href", "http://www.cs.nchu.edu.tw/seminar/" + data[i].file_name));
    }

    ul.append(li);
    news.append(ul);
}
