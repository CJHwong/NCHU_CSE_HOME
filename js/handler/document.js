function bindDocument(data) {
    var i, len, name, pdf, doc, odt, tr;
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
            odt.append($("<a/>").text("下載").attr("href", "http://www.cs.nchu.edu.tw/form/" + data[i].file_odt));
        }
        if (data[i].outer_link != null && data[i].outer_link != "") {
            name = $("<td/>").append($("<a/>").attr("href", data[i].outer_link).text(data[i].name));
        } else {
            name = $("<td/>").text(data[i].name);
        }
        tr = $("<tr/>").append(name).append(pdf).append(doc).append(odt);

        var subject = data[i].subject.trim().replace(/\s+/g, " ");

        if (data[i].cate != null) {
            if (data[i].cate == 1) {
                type = "bachelor";
            } else if (data[i].cate == 2 || data[i].cate == 6) {
                if (data[i].name.indexOf("碩專") == -1) {
                    type = "master";
                } else {
                    type = "master-alt";
                }
            } else if (data[i].cate == 3) {
                type = "academic";
            } else if (data[i].cate == 4) {
                type = "staff";
            }


            if (subject == "表格下載") {
                $("#doc-" + type).append(tr);
            } else if (subject == "表格下載 - 論文考試相關業務申請書") {
                $("#doc-exam-" + type).append(tr);
            } else if (subject == "表格下載 - 獎學金申請表") {
                $("#doc-award-" + type).append(tr);
            } else if (subject == "表格下載 - 領取獎助學金切結書") {
                $("#doc-form-" + type).append(tr);
            }

        } else {
            if (subject == "大學部") {
                $("#rule-bachelor").append(tr);
            } else if (subject == "碩士班/在職專班") {
                if (data[i].name.indexOf("碩專") == -1) {
                    $("#rule-master").append(tr);
                } else {
                    $("#rule-master-alt").append(tr);
                }
            } else if (subject == "博士班") {
                $("#rule-academic").append(tr);
            } else if (subject == "一般") {
                $("#rule-official").append(tr);
            }
        }
    }
}
