$(function(){
    var btn = $(".button");
    var timeEfect = 600;

    btn.on("click", function(e){
        e.preventDefault();

        // Fast ou Slow
        $(".hide").hide(timeEfect, function() {/* Executar quando o efeito estiver concluído */});

        $(".show").show(timeEfect, function(){
            console.log("Ok");
        });

        $(".toggle").stop().toggle(timeEfect);
       
    });
});