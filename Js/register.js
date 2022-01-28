function validate() {
    var retVal = true;

    var nome = document.getElementById("Nome");
    var nomeError = document.getElementById("NomeError");
    if (nome.value == "") {
        retVal = false;
        nomeError.classList.add("d-block");
        nomeError.classList.remove("d-none");
    } else {
        nomeError.classList.remove("d-block");
        nomeError.classList.add("d-none");
    }

    var apelido = document.getElementById("Apelido");
    var apelidoError = document.getElementById("ApelidoError");
    if (apelido.value == "") {
        retVal = false;
        apelidoError.classList.add("d-block");
        apelidoError.classList.remove("d-none");
    } else {
        apelidoError.classList.remove("d-block");
        apelidoError.classList.add("d-none");
    }

    var email = document.getElementById("Email");
    var emailError = document.getElementById("EmailError");
    if (email.value == "") {
        retVal = false;
        emailError.classList.add("d-block");
        emailError.classList.remove("d-none");
    } else {
        emailError.classList.remove("d-block");
        emailError.classList.add("d-none");
    }

    var password = document.getElementById("Password");
    var passwordError = document.getElementById("PasswordError");
    if (apelido.value == "") {
        retVal = false;
        passwordError.classList.add("d-block");
        passwordError.classList.remove("d-none");
    } else {
        passwordError.classList.remove("d-block");
        passwordError.classList.add("d-none");
    }

    var confirmPassword = document.getElementById("ConfirmPassword");
    var confirmPasswordError = document.getElementById("ConfirmPasswordError");
    if (confirmPassword.value != password.value) {
        retVal = false;
        confirmPasswordError.classList.add("d-block");
        confirmPasswordError.classList.remove("d-none");
    } else {
        confirmPasswordError.classList.remove("d-block");
        confirmPasswordError.classList.add("d-none");
    }

    var morada = document.getElementById("Morada");
    var moradaError = document.getElementById("MoradaError");
    if (morada.value == "") {
        retVal = false;
        moradaError.classList.add("d-block");
        moradaError.classList.remove("d-none");
    } else {
        moradaError.classList.remove("d-block");
        moradaError.classList.add("d-none");
    }

    var plano = document.querySelectorAll('input[name="subscricao"]:checked').length;
    var planoError = document.getElementById('planoError');
    if (plano == 0) {
        retVal = false;
        planoError.classList.add("d-block");
        planoError.classList.remove("d-none");
    } else {
        planoError.classList.remove("d-block");
        planoError.classList.add("d-none");
    }

    var metodo = document.querySelectorAll('input[name="pagamento"]:checked').length;
    var metodoError = document.getElementById("metodoError");
    if (metodo == 0) {
        retVal = false;
        metodoError.classList.add("d-block");
        metodoError.classList.remove("d-none");
    } else {
        metodoError.classList.remove("d-block");
        metodoError.classList.add("d-none");
    }

    var successfulRegister = document.getElementById("SuccessfulRegister");
    if (retVal == true) {
        successfulRegister.classList.add("d-block");
        successfulRegister.classList.remove("d-none");
    }

    nome.value = "";
    apelido.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    morada.value = "";

    return retVal;
}

function metodo() {
    var dadosCartao = document.getElementById("dados1");
    if ($("#register input[type='radio']:checked").val() == 1) {
        dadosCartao.classList.add("d-block");
        dadosCartao.classList.remove("d-none");
        metodoError.classList.remove("d-block");
        metodoError.classList.add("d-none");
    } else {
        dadosCartao.classList.remove("d-block");
        dadosCartao.classList.add("d-none");
        metodoError.classList.remove("d-block");
        metodoError.classList.add("d-none");
    }

    var dadosMbway = document.getElementById("dados2");
    if ($("#register input[type='radio']:checked").val() == 2) {
        dadosMbway.classList.add("d-block");
        dadosMbway.classList.remove("d-none");
        metodoError.classList.remove("d-block");
        metodoError.classList.add("d-none");
    } else {
        dadosMbway.classList.remove("d-block");
        dadosMbway.classList.add("d-none");
        metodoError.classList.remove("d-block");
        metodoError.classList.add("d-none");
    }
}