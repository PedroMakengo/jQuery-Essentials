$(function () {
    $(".jquery_essentials").html("jQuery Essentials");

    console.group("Mensagens Gerais");
    console.log("jQuery Essentials");
    console.info("O jquery foi carregado com sucesso");
    console.warn("Uma alerta");
    console.error("Um erro");
    console.groupEnd();

    var cadastro = false;


    console.group("Cadastrado de usuários");
    console.info("Cadastro iniciado!");

    if (cadastro === true) {
        console.log("Cadastro Realizado");
    } else {
        console.warn("Erro ao cadastrar");
    }
    console.groupEnd();
});
