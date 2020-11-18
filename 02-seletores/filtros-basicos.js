$(function () {
    // Pegando todos os elementos que não possuem uma classe
    $("p:not('.p')").css("font-weight", "bold");

    // Pegando o primeiro elemento
    $("p:first").css("color", "red");

    // Pegando o último elemento
    $("p:last").css("color", "red");

    // Pegando os elementos pares
    $("p:even").css("background", "#eee");

    // Pegando os elementos impares 
    $("p:odd").css("background", "#ccc");

    // Pegando os elementos pelos os seus indíces
    $("p:eq(4)").text("jQuery Essentials");

    // Todos os elementos a cima da posição 4
    $("p:gt(4)").text("Selectores GT");

    // Pegando os sprimeiros elementos
    $("p:lt(5)").text("Selectores LT");


    $(".list :header").css({
        "font-size": "1.4em",
        color: "#888"
    });

    $(".list :header span").css("color", "blue");

    function animar_el(elemento) {
        $(elemento).fadeToggle(400, function () {
            animar_el(elemento);
        });
    }

    var num = 1;
    setInterval(function () {
        $(":animated").text(num);
        num++;
    }, 800);
    animar_el(".list span");


    $(":focus").css("padding", "10px");

    // Filtro do tipo root é muito pouco utilizado ele simplesmente pega a raíz...
    console.log($(":root"));
});