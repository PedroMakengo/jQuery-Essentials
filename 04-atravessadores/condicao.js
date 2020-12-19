$(function () {

    // IS
    // Disparar um acção
    $("p").on("click", function () {
        console.clear();

        // Filtro de condição is
        if ($(this).is(".j")) {
            console.log("TRUE");
        } else {
            console.log("FALSE");
        }

        if ($(this).is(":first-of-type")) {
            console.log("FIRST");
        }
    });

    // HAS
    // Verificando um paragrafo que contem um span
    $("p").has("span").append("<sup>Has SPAN</sup>");

    // NOT
    // Aquele que não possui
    $("p").not(":contains('jQuery')").css("color", "red");
    $("p").not(":eq(2)").css("border", "1px solid red");

    // FILTER 
    $("p").filter(":contains('jQuery')").css({
        color: "red",
        border: "1px solid red"
    });

    $("p").css({
        padding: "10px",
        background: "#eee"
    }).filter(function (index) {
        return index % 2 == 1;
    }).css("background", "#ccc");


    // MAP 
    var mapa = $("p").map(function (indice, elemento) {
        console.log($(elemento));

        return "<p>" + indice + " - " + $(elemento).text() + " </p>";
    }).get().join("");

    $("<div>" + mapa + "</div>").appendTo("body");
});