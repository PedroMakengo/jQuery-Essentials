$(function () {
    // Elementos que possuiem classe
    $("[class]").css("background", "#ccc");

    $("[data-upinside='true']").css("background", "#006699");

    // Elemento diferente
    $("a[title!='UpInside']").css("background", "red");

    // Todos os que começam com a palavra jquery
    $("[class^='jquery']").css("background", "#0099ff");

    // Atributos que terminam com essentials
    $("[class$='jquery']").css("color", "#fff");
});