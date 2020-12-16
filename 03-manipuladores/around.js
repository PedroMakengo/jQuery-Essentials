$(function () {
    // Colocando cada paragrafo dentro de uma div
    // $("p").wrap("<div>");

    // Colocando todos elementos paragrado dentro de uma div
    $("p").wrapAll("<div>");

    // Envolvendo cada paragrafo em um outro elemento 
    $("p").wrapInner("<span>");

    // Removendo o span do paragrafo
    $("span").unwrap("p");

    $("span").wrap("<h2>")
});