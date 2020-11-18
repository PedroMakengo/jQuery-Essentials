$(function () {
    // Elmento filho
    $("article p").css("color", "red");

    // Elemento Body
    $("body").css({
        display: "block",
        "margin-bottom": "10px"
    });

    // Elemento filho direito
    $("article > p").css("color", "blue");

    // Elemento seguido do outro
    $("div + *").css("background", "yellow");

    // Elementos irmãos
    $("div ~ p").text("Irmão")

});
