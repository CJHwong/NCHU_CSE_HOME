function bindSlide(data) {
    "use strict";
    var slideList = $("#slides");
    var slideTitles = $("#slide-title");
    var slideDots = $("#slide-dots");
    var i;
    for (i = 0; i < data.length; i += 1) {
        slideList.append($("<li/>").append($("<img/>").attr("src", "http://www.cs.nchu.edu.tw/v3x/slider_show/" + data[i].filename)))
        slideTitles.append($("<li/>").append($("<span/>").text(data[i].text)));
        slideDots.append($("<li/>").attr("order", i));
    }
    slideList.css("width", data.length * 100 + "%");
    slideTitles.css("width", data.length * 100 + "%");
    $("#slides > li").css("width", 100 / data.length + "%");
    $("#slide-title > li").css("width", 100 / data.length + "%");


    // Start Slider Show
    var TOTAL = $("#slides > li").length;
    var WIDTH = parseInt($("#slider-container").css("width"), 10);
    var currentSlide = 0;

    // RightLeft Slide
    var startSlide = function() {
        "use strict";
        $("#welcome").fadeOut(700);

        $("#slides > li").each(function() {
            var left = parseInt($(this).css("left"), 10) || 0;
            $(this).animate({
                left: Math.abs(left) >= WIDTH * (TOTAL - 1) ? 0 : (currentSlide + 1) * -WIDTH
            }, 200);
        });

        $("#slide-title > li").each(function() {
            var left = parseInt($(this).css("left"), 10) || 0;
            $(this).animate({
                left: Math.abs(left) >= WIDTH * (TOTAL - 1) ? 0 : (currentSlide + 1) * -WIDTH
            }, 200);
        });

        currentSlide = currentSlide >= $("#slides > li").length - 1 ? 0 : currentSlide + 1;
        // Switch slide dot
        $("#slide-dots > li").each(function() {
            if ($(this).attr("order") == currentSlide) {
                $(this).css("background-color", "white");
            } else {
                $(this).css("background-color", "black");
            }
        })
    }
    var timer = setInterval(startSlide, 5000);

    $("#slide-dots > li").each(function() {
      $(this).bind("click", function(e) {
        clearInterval(timer)
        currentSlide = parseInt($(e.target).attr("order"), 10) - 1;
        startSlide();
        timer = setInterval(startSlide, 5000);
      })
    });
}
