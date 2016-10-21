function bindFaculty(data) {
    var faculty = $("#faculty");
    var other = $("#other-faculty");
    var retire = $("#retire-faculty")
    var order = [];
    var orderView = [];
    var orderOther = [];
    var orderOtherView = [];
    var orderRetire = [];
    var orderRetireView = [];
    var memberView, imageView, detailView, table;

    for (i = 0, len = data.length; i < len; i += 1) {
        memberView = $("<div/>", {
            "class": "member row"
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
        } else if (data[i].cate == "1") {
            orderOther[orderOther.length] = parseInt(data[i].number_pt, 10);
            orderOtherView[orderOtherView.length] = memberView;
        } else if (data[i].cate == "2") {
            orderRetire[orderRetire.length] = parseInt(data[i].number_retire, 10);
            orderRetireView[orderRetireView.length] = memberView;
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
    for (i = 0, len = orderOther.length; i < len; i++) {
      for (j = i; j < len; j++) {
        if (orderOther[i] > orderOther[j]) {
          var tmp = orderOther[i];
          orderOther[i] = orderOther[j];
          orderOther[j] = tmp;

          tmp = orderOtherView[i];
          orderOtherView[i] = orderOtherView[j];
          orderOtherView[j] = tmp;
        }
      }
    }
    for (i = 0, len = orderRetire.length; i < len; i++) {
      for (j = i; j < len; j++) {
        if (orderRetire[i] > orderRetire[j]) {
          var tmp = orderRetire[i];
          orderRetire[i] = orderRetire[j];
          orderRetire[j] = tmp;

          tmp = orderRetireView[i];
          orderRetireView[i] = orderRetireView[j];
          orderRetireView[j] = tmp;
        }
      }
    }
    for (i = 0, len = orderView.length; i < len; i++) {
        faculty.append(orderView[i]);
    }
    for (i = 0, len = orderOtherView.length; i < len; i++) {
        other.append(orderOtherView[i]);
    }
    for (i = 0, len = orderRetireView.length; i < len; i++) {
        retire.append(orderRetireView[i]);
    }
}
