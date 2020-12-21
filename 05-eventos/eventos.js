$(function () {
    var content = "<div>Opa, estamos aprendendo jQuery <p class='j_close button'>Remover</p> </div>";

    // ON
    $(".j_button").on("click", function (event) {
        // console.log(event);
        $(content).prependTo("body");
    });

    $("body").on("click", ".j_close", function () {
        $(this).parent().remove();
    });

    $("body").on("click mouseleave", ".j_close", { text: "<p class='clear'>Removido</p>" }, function (event) {
        $("body").prepend(event.data.text);
        $(this).parent("div").remove();
    });

    // ONE
    $(".j_button").one("click", function () {
        console.log("Primeiro click");
    });

    // TRIGGER disparar qualquer tipo de evento do jQuery
    $(".j_button").on("jQ.remove", function () {
        $(".clear").remove();
        console.log("jQ.remove executado");
    }).on("click", function () {
        var cc = $(".clear").length;
        if (cc >= 1) {
            $(this).trigger("jQ.remove");
        }
    });

    //
    $("div p").on("click", function () {
        console.log("CLICK");

        var input = $(this).parent().find("input");

        input.focus(function () {
            console.log("FOCUSED");
        });

        // input.trigger("focus");
        // triggerHandler
        input.triggerHandler("focus");

        input.off("focus");

        // OFF 

        $(this).off("click").on("click", function () {
            console.log("Other Click");
        })
    });
});