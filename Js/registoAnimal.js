$(document).ready(function () {
    console.log('hi')
        $("#registerButton").click(function () {
            var nome = document.getElementById("nome").value;
            var especie = document.getElementById("especie").value;
            var raca = document.getElementById("raca").value;
            var sexo = document.getElementById("sexo").value;
            var idade = document.getElementById("idade").value;
            var registoError = document.getElementById("registoError");
            var registoSuccess = document.getElementById("registoSuccess");

            if (nome == "" || especie == "" || raca == "" || sexo == "" || idade == "") {
                registoError.classList.add("d-block");
                registoError.classList.remove("d-none");
                return false;
            } else {
                registoError.classList.remove("d-block");
                registoError.classList.add("d-none");
                registoSuccess.classList.add("d-block");
                registoSuccess.classList.remove("d-none");
            }
            let pet = {
                name: $("#nome").val(),
                age: $("#idade").val(),
                species: $("#especie").val(),
                gender: $("#sexo").val(),
                race: $("#raca").val()
            }
            if (JSON.parse(window.localStorage.getItem('animais')) == null) {
                console.log("entrei no if")
                window.localStorage.setItem('animais', '[]');
                var a = JSON.parse(window.localStorage.getItem('animais'));
                console.log(a)
                b = a.concat([pet]);
                window.localStorage.setItem('animais', JSON.stringify(b));  
            } else if (JSON.parse(window.localStorage.getItem('animais')).length < 3){
                console.log('cheguei ao else!')
                var a = JSON.parse(window.localStorage.getItem('animais'));
                b = a.concat([pet]);
                window.localStorage.setItem('animais', JSON.stringify(b));
            } else {
                return alert('Chegou ao limite de pets')
            }
            console.log(window.localStorage.getItem('animais'))
            window.location = 'pets.html'
        })
        viewModel1 = new function () {
            animais = JSON.parse(window.localStorage.getItem('animais'))
            console.log(animais)

        }
    })