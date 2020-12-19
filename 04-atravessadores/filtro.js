$(function () {
    // Filtrando usando o find
    $(".article_content").find("p").css({
        "font-size": "0.8em"
    });

    $(".article").find(".article_link").on("click", function () {
        $(this).parent().find(".article_content p").toggleClass("active");
        $(this).toggleClass("active");
        return false;
    });

    // NEXT E NEXT ALL
    // Irmão Seguinte 
    $(".article_content p:first").next().addClass("active");
    // Todos irmão apois o selecionado
    $(".article_content p:first").nextAll().addClass("active");

    // PREV E PREV ALL
    // Irmão Antecessor
    $(".article_content p:last").prev().removeClass("active");
    $(".article_content p:last").prevAll().addClass("active");

    // UNTIL 
    $(".article_content p:first").clone().appendTo(".article_content");
    $(".article_content p:first").clone().removeClass("active").appendTo(".article_content");
    $(".article_content p:first").clone().appendTo(".article_content");

    // $(".article_content p").nextUntil().fadeOut(2000);
    // $(".article_content p").nextUntil(".active").fadeOut(2000);
    // $(".article_content p").nextUntil("", ".active").fadeOut(2000);

    // $(".article_content p:last").prevUntil().fadeOut(2000);
    $(".article_content p:last").prevUntil(".active").fadeOut(2000);
    $(".article_content p:last").prevUntil("", ".active").fadeOut(2000);
}); 