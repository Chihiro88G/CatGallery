$(document).ready(function () {
    var main_width = $(".main_container").width();
    var long_conteiner = $(".long_container");
    var item = $(".item");
    var slide_number = 0;

    long_conteiner.css("width", main_width * 2.5);
    item.css("width", long_conteiner.width() / 5);

    $(".see_next").click(function () {
        if (slide_number < 4) {
            slide_number++;
        }
        if (slide_number == 4) {
            slide_number = 0;
        }
        $(".see_next").animate({ opacity: 1 });

        var item_width = $(".item").width();
        var pixels_moved = item_width * slide_number;

        long_conteiner.animate({
            marginLeft: -pixels_moved
        });
    });

    $(".see_previous").click(function () {

        if (slide_number == 0) {
            slide_number = 3;
        } else if (slide_number == 1) {
            slide_number = 0;
        } else if (slide_number > 0) {
            slide_number--;
        }
        $(".see_previous").animate({ opacity: 1 });

        var item_width = $(".item").width();
        var pixels_moved = item_width * slide_number;

        long_conteiner.animate({
            marginLeft: -pixels_moved
        });
    });
});

