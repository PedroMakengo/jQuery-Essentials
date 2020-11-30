$(function () {
    var title = $("title").text();

    // Inserir antes o title
    $(".j").before("<h1>" + title + "</h1>");

    // Inserir antes 
    $("<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptas, doloribus quia reprehenderit dolorem, et laboriosam animi aliquid eaque nesciunt, quibusdam alias! Magnam quasi provident ullam voluptatum unde illum a?</p>").insertBefore($(".j"));

    var old_text = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptas, doloribus quia reprehenderit dolorem, et laboriosam animi aliquid eaque nesciunt, quibusdam alias! Magnam quasi provident ullam voluptatum unde illum a?</p>";
    // Inserir depois
    $(".j").after(old_text);
    $(".j").after("<a class='a' href='#'>Continue lendo...</a>");
    $(".a").insertAfter($("p:last"));
});