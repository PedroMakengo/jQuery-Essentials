$(function () {
    // Elementos que possuiem classe
    $("[class]").css("background", "#ccc");

    // Um atributo que vai ser igual
    $("[data-upinside='true']").css("background", "#006699");

    // Elemento diferente
    $("a[title!='UpInside']").css("background", "red");

    // Todos os que começam com a palavra jquery
    $("[class^='jquery']").css("background", "#0099ff");

    // Atributos que terminam com essentials
    $("[class$='jquery']").css("color", "#fff");

    // Pegar todas as classes que contem a letra r
    $("[class*='r']").css("font-weight", "bold");

    // Pegar os elementos com a classe jquery
    $("[class~='jquery']").css("text-transform", "uppercase");

    // Elemento em si ou elemento seguido de hífem
    $("[class|='jquery-essentials']").css("border-bottom", "2px solid red");

    // Atacando um atributo definido
    $("[class*='jquery'][data-upinside]").css("color", "pink");
});