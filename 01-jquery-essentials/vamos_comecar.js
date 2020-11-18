// FORMA PADRÃO DE INICIALIZAR O jQuery
// $(document).ready(function () {
//     $(".jquery_essentials").html("Jquery Iniciado");
// });

// FORMA SIMPLIFICADA DE INICIALIZAR O jQuery
// $(function () {
//     $(".jquery_essentials").html("Jquery Iniciado com Gatilhos");
// });


// CARREGANDO ANTES DE OUTRA LIB
// jQuery(function ($) {
//     $(".jquery_essentials").html("Jquery Antes de outra Lib ")
// });

// CARREGANDO O Jquery DEPOIS
// var $j = jQuery.noConflict();
// $j(document).ready(function () {
//     $j(".jquery_essentials").html("Jquery Depois de outra Lib ")
// });


$(function () {
    $(".jquery_essentials").html("jQuery Essentials");
});
