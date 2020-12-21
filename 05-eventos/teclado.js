$(function () {
    var input = $("input");
    var textarea = $("textarea");

    // IDENTIFICAÇÃO DA TECLA DIGITADA
    input.keypress(function (e) {
        console.log("PRESS: " + e.which);
    }).keydown(function (event) {
        console.log("DOWN:" + event.which);
        console.log(event.metaKey);

        if (event.metakey) {
            console.log("TRUE");
            if (event.which === 85) {
                event.prevenDefault();
                alert("UpInside!");
            }
            if (event.which === 74) {
                alert("jQuery Essentials")
            }
        }
    }).keyup(function () {
        console.log("UP");
    });

    $("input").on("keyup", function () {
        var input = $(this);
        // input.val(input.val().toUpperCase());

        if (!$(".result").find("h1").length) {
            $(".result").prepend("<h1>" + input.val().toUpperCase() + "</h1>");
        } else {
            $(".result h1").text(input.val().toUpperCase());
        }
    });

    $("textarea").on("keyup", function () {
        var textarea = $(this);
        // input.val(input.val().toUpperCase());

        if (!$(".result").find("div").length) {
            $(".result").append("<div><p>" + textarea.val() + "</p></div>");
        } else {
            $(".result div").html("<p>" + textarea.val().replace(/\n/g, "<p></p>") + "</p>");
        }
    });

    $(window).resize(function (event) {
        console.log($(this).outerWidth());
        // console.log(event);
    });

    $("body").height(1500);
    $(window).scroll(function (event) {
        console.log($(this).scrollTop());
        // console.log(event);
    })
});