function metodo() {
    console.log("passei aqui");
    var dadosCartao = document.getElementById("dados1");
    if ($("#register input[type='radio']:checked").val() == 1) {
        dadosCartao.classList.add("d-block");
        dadosCartao.classList.remove("d-none");
    } else {
        dadosCartao.classList.remove("d-block");
        dadosCartao.classList.add("d-none");
    }

    var dadosMbway = document.getElementById("dados2");
    if ($("#register input[type='radio']:checked").val() == 2) {
        dadosMbway.classList.add("d-block");
        dadosMbway.classList.remove("d-none");
    } else {
        dadosMbway.classList.remove("d-block");
        dadosMbway.classList.add("d-none");
    }
}