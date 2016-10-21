function fetchItem(type, method, id) {
    "use strict";
    var url, domain = "http://www.cs.nchu.edu.tw/v3x/json_data/";
    switch (type) {
        case "news":
            url = domain + "json_get_news_data.php?id=" + id + "&callback";
            break;
        case "event":
            url = domain + "json_get_seminar_data.php?id=" + id + "&callback";
            break;
    }

    $.ajax({
        url: url,
        type: "GET",
        dataType: "jsonp",
        success: function(response) {
            method(response);
        },
        error: function(response) {
            console.warn(type + " item got error!");
        }
    });
}

function fetchJson(type, method) {
    "use strict";
    var url, domain = "http://www.cs.nchu.edu.tw/v3x/json_data/";
    var dType;
    switch (type) {
        case "slide":
            url = domain + "json_slider.php"
            break;
        case "post":
            url = domain + "json_news.php";
            break;
        case "news":
            url = domain + "json_news.php";
            break;
        case "honor":
            url = domain + "json_honor.php";
            break;
        case "event":
            url = domain + "json_seminar.php";
            break;
        case "faculty":
            url = domain + "json_faculty.php";
            break;
        case "lab":
            url = domain + "json_laboratory.php";
            break;
        case "document":
            url = domain + "json_form.php";
            break;
        case "recruit":
            url = domain + "json_enroll.php";
            break;
        case "chairman":
            url = "data/chairman.json";
            break;
        case "rule":
            url = domain + "json_rule.php";
            break;
    }

    // temporary solution to read the static json file
    if (type === "chairman") {
        dType = "json";
    } else {
        dType = "jsonp"
    }

    $.ajax({
        url: url,
        type: "GET",
        dataType: dType,
        success: function(response) {
            method(response);
        },
        error: function(response) {
            console.warn(type + " error!");
        }
    });
}
