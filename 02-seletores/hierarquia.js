$(function () {
    $("article p").css("color", "red");

    // Elemento filho direito
    $("article > p").css("color", "blue");

    // Elemento seguido do outro
    $("div + p").css("background", "yellow");
});
