$(function () {

    // ADD e END
    var el = $(".article");

    el.css({
        "font-family": "Arial, serif",
        "font-size": "1em",
        "margin-bottom": "20px"
    }).end().add(".article_content p").css({
        "font-size": "0.8em"
    });

    var btn = "<p class='more load'>Carregar Mais 1</p>";
    $(btn).appendTo(el.parent());

    $("body").on("click", ".more", function () {
        console.log($(this));
        $(this).stop().fadeOut(100, function () {
            $(".article:last")
                .clone()
                .add(btn)
                .css("display", "none")
                .appendTo($(".article:last").parent())
                .slideDown(300, function () {
                    $("html, body").stop().animate({ scrollTop: $(this).offset().top }, 1000);
                });
        });
        console.clear();
        // console.log($(".article").add());
        // console.log($(".article").addBack());
    });
});