function bindLab(data) {
    var lab = $("#lab");
    var orderedLab = [];
    var labView, imageView, detailView, table;

    for (i = 0, len = data.length; i < len; i += 1) {
        labView = $("<div/>", {
            "class": "laboratory row"
        });

        imageView = $("<div/>", {
            "class": "col-xs-12 col-md-3",
            "html": $("<img/>", {
                "class": "img-thumbnail",
                "src": "http://www.cs.nchu.edu.tw/laboratory_logo/" + data[i].logo
            })
        });

        detailView = $("<div/>", {
            "class": "col-xs-12 col-md-9"
        });
        detailView
            .append($("<h4/>", {
                "text": data[i].name
            })).append($("<span/>", {
                "text": data[i].en_name
            }));

        table = $("<table/>");
        table
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "指導教授："
                }))
                .append($("<td/>", {
                    "text": data[i].faculty
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "位　　置："
                }))
                .append($("<td/>", {
                    "text": "理學大樓 " + data[i].phone
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "網　　址："
                }))
                .append($("<td/>", {
                    "html": $("<a/>", {
                        "text": data[i].url,
                        "href": data[i].url
                    })
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "簡　　介："
                }))
                .append($("<td/>", {
                    "html": $("<p/>", {
                        "text": data[i].introduction
                    })
                }))
            );

        detailView.append(table);
        labView
            .append(imageView)
            .append(detailView);

        var order = parseInt(data[i].number, 10);
        orderedLab[order] = labView;

    }

    for (i = 0, len = orderedLab.length; i < len; i++) {
        lab.append(orderedLab[i]);
    }
}
