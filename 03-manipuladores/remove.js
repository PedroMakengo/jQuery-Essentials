$(function () {
    // Removendo elemento do DOM
    $(".b").remove();

    // Eliminar qualquer texto 
    $(".d").empty();
    // Mudar o texto do elemento d
    setTimeout(function () {
        $(".d").text("#BoraProgramar");
    }, 2000);

    // Clicando nos paragrafos
    $("p").on("click", function () {
        $(this).toggleClass("active");
    });

    // Criando uma variavel
    var p;
    // Clicando no button e executando ações
    $(".button").on("click", function () {
        if (p) {
            p.appendTo(".r");
            p = null;
        } else {
            // Elimina elemento mais mantem os eventos 
            p = $("p").detach();
        }
    });

    var href = $(".e").text();
    // Pesquisar sobre o replaceWith serve para substituir
    $(".e").replaceWith("<p><a target='_blank' href='https://" + href + "'>" + href + "</a></p>");

    // Substituir todos
    $("<p>#BoraProgramar</p>").replaceAll("p");
});