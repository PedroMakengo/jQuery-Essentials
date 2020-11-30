$(function () {
    // Pegando o texto do nosso elemento
    var text = $(".j").text();

    // Pegando a marcação do nosso elemento html
    var html = $(".j").html();

    // A função do append é colocar ao final um elemento
    $(".e").append("<p>" + text + "</p>");
    $(".e").append("<p>" + html + "</p>");

    // Mover um contéudo dentro de uma div
    $(".a").appendTo($(".e"));
    $("<p><b>#BoraProgramar</b></p>").appendTo($(".e"));

    // A função prepend é serve para colocar elemento no top
    $(".e").prepend("<h2>Resultados :</h2>");
    $("<p>Exemplos</p>").prependTo($(".e p:first"));
});