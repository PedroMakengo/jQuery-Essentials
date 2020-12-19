$(function () {

    // FOREACH
    // Foreach
    $.each($("p"), function (i, el) {
        var el = $(el);
        el.html(el.html() + " - " + i);
    });

    // EQ
    $("p").eq(1).css("color", "red");
    $("p").eq(2).css("color", "orange");

    // FIRST
    // Primeiro elemento
    $("p").first().css("color", "silver");

    // LAST
    // Ultimo elemento
    $("p").last().css("color", "pink");

    // SLICE 
    // Filtrar , onde a minha acção vai ocorrer
    $("p").slice(0, 4).css({
        background: "#000",
        padding: "10px"
    });
});