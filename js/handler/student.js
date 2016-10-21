function bindStudent(data) {
    var i, type, tr, name, pdf, doc, odt;
    for (i = data.length - 1; i >= 0; i--) {
        pdf = $("<td/>");
        if (data[i].file_pdf != null) {
            pdf.append($("<a/>").text("下載").attr("href", "http://www.cs.nchu.edu.tw/form/" + data[i].file_pdf));
        }
        doc = $("<td/>");
        if (data[i].file_doc != null) {
            doc.append($("<a/>").text("下載").attr("href", "http://www.cs.nchu.edu.tw/form/" + data[i].file_doc));
        }
        odt = $("<td/>");
        if (data[i].file_odt != null) {
            doc.append($("<a/>").text("下載").attr("href", "http://www.cs.nchu.edu.tw/form/" + data[i].file_odt));
        }
        if (data[i].outer_link != null && data[i].outer_link != "") {
            name = $("<td/>").append($("<a/>").attr("href", data[i].outer_link).text(data[i].name));
        } else {
            name = $("<td/>").text(data[i].name);
        }
        tr = $("<tr/>").append(name).append(pdf).append(doc).append(odt);

        if (data[i].cate == 1) {
            type = "bachelor";
        } else if (data[i].cate == 2 || data[i].cate == 6) {
            type = "master";
        } else if (data[i].cate == 3) {
            type = "academic";
        } else {
          // console.log(data[i])
        }

        if (data[i].subject.substring(0, 6) == "畢業條件明細") {
            if (data[i].name.indexOf("在職") == -1) {
                $("#graduate-" + type).append(tr);
            } else {
                if (data[i].name.indexOf("中科") == -1) {
                    $("#graduate-" + type + "-alt").append(tr);
                } else {
                    $("#graduate-" + type + "-alt-ctsp").append(tr);
                }
            }
        } else if (data[i].subject == "修業規定") {
            if (data[i].name.indexOf("在職") == -1) {
                $("#rule-" + type).append(tr);
            } else {
                $("#rule-" + type + "-alt").append(tr);
            }
        } else {
            // $("#rule-" + type + "-alt").append(tr);
        }
    }
}
