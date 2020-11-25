$(function () {

    // SELECTOR DE ELEMENTO
    $("b").text("jQuery Essentials");

    $(".jquery").css("color", "red");

    $("#jquery").text("Id=jQuery");

    $("div *").css("border", "1px solid #CCC");

    $(".jquery, b").css({
        background: "blue",
        color: "red",
        'border-radius': "4px",
        padding: "10px",
        'font-size': "1.4em"
    });

    $("b").add("p").css("font-size", "2em");
});
