function bindFaculty(data) {
    var faculty = $("#faculty");
    var other = $("#other-faculty");
    var order = [];
    var orderView = [];
    var memberView, imageView, detailView, table;

    for (i = 0, len = data.length; i < len; i += 1) {
        memberView = $("<div/>", {
            "class": "member row"
        });

        imageView = $("<div/>", {
            "class": "col-xs-12 col-md-3",
            "html": $("<img/>", {
                "class": "img-thumbnail",
                "src": "http://www.cs.nchu.edu.tw/v3x/faculty_photo/" + data[i].photo
            })
        });

        detailView = $("<div/>", {
            "class": "col-xs-12 col-md-9"
        });
        detailView
            .append($("<h4/>", {
                "text": data[i].name + " " + data[i].en_name
            })).append($("<span/>", {
                "text": data[i].pos
            }));

        table = $("<table/>");
        table
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "學　　歷："
                }))
                .append($("<td/>", {
                    "text": data[i].edu.replace(/_./g, ", ")
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "經　　歷："
                }))
                .append($("<td/>", {
                    "text": data[i].exp.replace(/_./g, ", ")
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "專長領域："
                }))
                .append($("<td/>", {
                    "text": data[i].res.replace(/_./g, ", ")
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "連絡電話："
                }))
                .append($("<td/>", {
                    "text": data[i].phone
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "個人網頁："
                }))
                .append($("<td/>", {
                    "html": $("<a/>", {
                        "text": data[i].web,
                        "href": data[i].web
                    })
                }))
            )
            .append($("<tr/>")
                .append($("<td/>", {
                    "text": "電子信箱："
                }))
                .append($("<td/>", {
                    "html": $("<a/>", {
                        "text": data[i].mail,
                        "href": "mailto:" + data[i].mail
                    })
                }))
            );

        detailView.append(table);
        memberView
            .append(imageView)
            .append(detailView);
        if (data[i].cate == "0") {
            order[order.length] = parseInt(data[i].number, 10)
            orderView[orderView.length] = memberView;
        } else {
            other.append(memberView);
        }
    }
    for (i = 0, len = order.length; i < len; i++) {
      for (j = i; j < len; j++) {
        if (order[i] > order[j]) {
          var tmp = order[i];
          order[i] = order[j];
          order[j] = tmp;

          tmp = orderView[i];
          orderView[i] = orderView[j];
          orderView[j] = tmp;
        }
      }
    }
    for (i = 0, len = orderView.length; i < len; i++) {
        faculty.append(orderView[i]);
    }
}
