function bindChairman(data) {
    var chairman = $("#chairman");
    var memberView, imageView, detailView, table;

    for (i = 0, len = data.length; i < len; i += 1) {
        memberView = $("<div/>", {
            "class": "chairman row"
        });

        imageView = $("<div/>", {
            "class": "col-xs-12 col-md-3",
            "html": $("<img/>", {
                "class": "img-thumbnail",
                "src": "http://www.cs.nchu.edu.tw/faculty_photo/" + data[i].photo
            })
        });

        detailView = $("<div/>", {
            "class": "col-xs-12 col-md-9"
        });
        detailView
            .append($("<h4/>", {
                "text": data[i].name
            }));

        table = $("<table/>");
        table
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "任　　期："
                }))
                .append($("<td/>", {
                    "text": data[i].during.replace(/_./g, ", ")
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "職　　稱："
                }))
                .append($("<td/>", {
                    "text": data[i].title.replace(/_./g, ", ")
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "教學方面："
                }))
                .append($("<td/>", {
                    "text": data[i].education
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "研究方面："
                }))
                .append($("<td/>", {
                    "text": data[i].research
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "其他方面："
                }))
                .append($("<td/>", {
                    "text": data[i].other
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "個人檔案："
                }))
                .append($("<td/>", {
                    "text": data[i].profile
                }))
            );

        detailView.append(table);
        memberView
            .append(imageView)
            .append(detailView);
        chairman.append(memberView);
    }
}
