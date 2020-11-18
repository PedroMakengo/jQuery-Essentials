$(function () {
    // Paragrafos com elementos dentro...
    $("p:parent").css("background", "red");

    // Elementos vazios adicionando lá uma tag
    $("p:empty").html("<b>Este esta vazio!</b>");

    // Pegar elementos que contem a palavra 
    $("p:contains('Essentials')").css("color", "#FFF");

    //  Pegando um paragrafo que contem um elemento b como filho
    $("p:has('b')").text("É esta aqui");

});