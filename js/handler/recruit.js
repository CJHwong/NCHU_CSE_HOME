function bindRecruit(data) {
    var i, len, type, tr, name, link;
    for (i = data.length - 1; i >= 0; i--) {
        name = $("<td/>").text(data[i].name);
        link = $("<td/>");
        if (data[i].link != null) {
            link.append($("<a/>").text("前往").attr("href", data[i].link));
        }
        tr = $("<tr/>").append(name).append(link);

        if (data[i].cate == 1) {
            type = "college";
        } else if (data[i].cate == 2) {
            type = "master"
        } else if (data[i].cate == 3) {
            type = "doctor";
        }

        if (data[i].title == "各學年度入學考試題目") {
            $("#exam-" + type).append(tr);
        } else if (data[i].title == "入學相關資訊") {
            $("#info-" + type).append(tr);
        } else if (data[i].title == "評估推薦表") {
            $("#form-" + type).append(tr);
        }
    }
}
