$(function () {

    // CHILDREN
    // Filhos do elemento selecionados
    $(".article").children().css("font-family", "Arial, serif");
    // Filtrados por article_content
    $(".article").children(".article_content").css("margin-bottom", "30px");
    // Filtrados por paragrafo
    $(".article_content").children("p").css("font-size", "0.8em");

    // SIBLINGS
    // Irmãos
    $(".article_content p").siblings().css("color", "#777");
    // Irmãos filtrados pela classe a
    $(".article_content p").siblings(".a").css("color", "#09f");

    // PARENT
    // Primeiro parent do b retrocedendo...
    $(".article_content b").parent().css({
        padding: "10px",
        background: "#fbfbfb"
    }).parent("div").css({
        "padding-bottom": "10px",
        "border-bottom": "5px solid #eee"
    });

    // PARENTS
    // Criando um evento 
    $("p").on("click", function () {
        // $(this).parents().toggleClass("active");
        $(this).parents("body").toggleClass("active");

        var data = new Date();
        $(".date").remove();
        $(this).parents("div:last").append("<div class='date'>" + data.getUTCDate() + "/" + data.getUTCMonth() + "/" + data.getUTCFullYear() + "</div>");

        // Parent volta até ao elemento raíz
        console.log($(this).parents());
        // Voltar apartir do elemento atual até o delimitador
        console.log($(this).closest(".article"));
    });

    // CLOSEST
    $("b").closest("p").css("border-top", "1px solid #09f");

    console.log("UNTIL");
    // Volte até
    console.log($(".a").parents(".article"));
    // Parentes de article [EL, ]
    console.log($(".a").parentsUntil(".article"));
    // Parentes de article [EL, FILTRO]
    console.log($(".a").parentsUntil("body", ".article"));

});