function redirect() {
    /* Replace the content section according to the given hashtag */
    "use strict";
    var hash = window.location.hash;
    hash = hash.substring(1, hash.length);
    if (hash === "") {
        $("#content").load("views/" + "home" + ".html");
    } else {
        switch (hash) {
            case "news":
            case "event":
            case "honor":
                $("#content").load("views/" + hash + ".html");
                break;
            case "intro":
            case "chairman":
            case "recruitMaster":
            case "recruitAcademic":
            case "studentBachelor":
            case "studentBachelorProject":
            case "studentMaster":
            case "studentAcademic":
            case "studentMasterAlt":
            case "studentCloud":
            case "studentList":
            case "faculty":
            case "facultyPT":
            case "lab":
            case "document":
            case "documentBachelor":
            case "documentMaster":
            case "documentMasterAlt":
            case "documentAcademic":
            case "documentStaff":
            case "documentOfficial":
                if (getParameter("id") != undefined) {
                    window.location.href = window.location.href.split("?")[0] + "#" + hash;
                }
                $("#content").load("views/" + hash + ".html");
                break;
            case "top":
                break;
            default:
                console.warn("404");
                break;
        }
    }
}

function getParameter(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
