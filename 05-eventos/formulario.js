$(function () {
    var instruction = $(".result b");

    // FOCUS
    $("input").focus(function () {
        console.log("FOCUS");
    }).focusin(function () {
        instruction.text("Informe o " + $(this).attr("placeholder").replace(":", ""));
    }).focusout(function () {
        if (!$(this).val()) {
            instruction.text("Hey, e o título");
        }
    }).change(function () {
        instruction.text($(this).val());
    });

    $("*").blur(function () {
        console.log("BLUR" + this);
    }).focusout(function () {
        console.log("OUT" + this);
    });

    $("*").select(function (e) {
        console.log(e);
    });

    $("input, textarea").focus(function () {
        $(this).select();
        document.execCommand("copy");
    });

    // SUBMETER 
    $("form").on("submit", function (event) {
        event.preventDefault();
        var form = $(this);
        // recuperar o name do campo
        var data = $(this).serialize();

        console.log(data);
        // $.post("api.php", { data: data }, function () {

        // });
        form.find("button").text("Carregando");
    });
});