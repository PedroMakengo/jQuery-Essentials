$(function () {

    // Eventos de mouse
    $(".j_click").click(function (event) {
        $(this).off("click");
        console.log(event);

        $("<div></div>").appendTo("body").html("<div> Event: " + event.type + "</div>");
    }).mousedown(function (event) {

        console.log(event.type);

    }).mouseup(function (event) {

        console.log(event.type);

    });

    // dbclick
    $(".j_dblclick").dblclick(function (events) {
        events.preventDefault();
        $(this).off("dblclick");
        $("<div></div>").appendTo("body").html("<div> Event: " + events.type + "</div>");
    });

    $(".j_contextmenu").contextmenu(function (event) {
        event.preventDefault();
        console.log(event);
        $(this).css("position", "relative").append("<span class='menu'>Menu Desabilitado!</span>");
        $(this).find("span").slideDown();

        $(this).mouseleave(function () {
            console.log(event);
            $(this).off("mouseleave").find("span").slideUp();
        });
    });

    $(".j_hover").hover(function (event) {
        console.log(event);
        if (!$(".hover").length) {
            $("<div class='hover'></div>").appendTo("body").html("<div>Event: " + event.type + "</div>")
        } else {
            $(".hover div").append("| Event:" + event.type);
        }
    }).mouseenter(function () {
        $(this).text("Click Here");
    }).mouseleave(function () {
        $(this).text("I´am Sad!");
    }).click(function () {
        $(this).text("I´am Happy").off("hover mouseleave mouseenter")
    });

    // MOUSEMOVE
    $(".j_mousemove").mousemove(function (event) {
        console.info(event)

        if (!$(this).hasClass("stop")) {
            $(this).offset({ top: event.pageY - $(this).outerHeight() / 2, left: event.pageX - $(this).outerWidth() / 2 })
        }
    }).click(function () {
        $(this).toggleClass("stop");
    });


    $(".j_over").mouseover(function (event) {
        console.log("-");
        console.log("Entrou em " + event.target);
    }).mouseout(function (event) {
        console.log("-");
        console.log("Saiu em " + event.target);
    });
});