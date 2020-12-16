$(function () {

    $("p").css("color", "#006699");
    $("p").css({
        color: "#555",
        //"border-bottom": "1px solid #ccc"
    });

    // Valor de atributo
    $(".segunda").attr("id", "segunda");

    console.log($('.segunda').attr("id"));
    console.warn($('input').prop("checked"));
    console.warn($('input').attr("checked"));

    $("input").val("nome");
    console.warn($("input").val());

    // Fazer clone
    $(".segunda").clone().appendTo("body").html("<b>#BoraProgramar</b>");

    $("div").on("click", function () {
        // $(this).toggleClass("add");

        if ($(this).hasClass("add")) {
            $(this).removeClass("add");
            $(this).find("p").slideUp();
            $("input").removeAttr("checked");
        } else {
            $(this).addClass("add");
            $(this).find("p").slideDown();
            $("input").attr("checked", "checked");
        }
    })
});