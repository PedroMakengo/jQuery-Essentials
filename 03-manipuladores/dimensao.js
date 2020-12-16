$(function () {

    console.group("W");
    // Recuperando o tamanho
    console.log($("div:first").width());
    // Tamanho interno
    console.log($("div:first").innerWidth());
    // Tamanho externo
    console.log($("div:first").outerWidth());
    console.groupEnd();

    console.group("H");
    console.log($("div:first").height());
    console.log($("div:first").innerHeight());
    console.log($("div:first").outerHeight());
    console.groupEnd();

    $("div").css("float", "left").outerWidth("50%");

    // Normalizando altura
    var h = 0;
    $("div").each(function (i, el) {
        if ($(el).outerHeight() > 0) {
            h = $(el).outerHeight();
        }
    }).outerHeight(h);
});