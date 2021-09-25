function isValidCPF(cpf) {
    console.log(cpf.length);


    if (
        cpf.length != 11

    ) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);
        //se a operacao for igual a 0. % eh mod (resto)

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); // capturando o resto da variavel soma

        //validacao do primeiro digito

        if (resultado != digitos.charAt(0)) {
            return false;
        }
        soma = 0; // soma recebeu zero
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        //validacao do segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;

    }
}

function validacao() {
    console.log("Funcao de validacao")

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = isValidCPF(cpf) // essa variavel recebe o cpf digitado evalidado na função acima //

    if (resultadoValidacao) { // se o cpf for verdadeiro ele mostra o emoji verde //
        var element = document.getElementById('result');
        element.innerHTML = `\u{2705}`
    } else { // se for invalido ele mostra emoji vermelho //
        var element = document.getElementById('result');
        element.innerHTML = `\u{274C}`

        // abaixo é o alerta apos aparecer o emoji invalido // 

        alert("CPF Invalido, confira o numero digitado!"); // alerta mostrando que cpf está invalido//
    }

}

// Validadores de campos obrigatorios //

function enviar() {
    var nome = document.getElementById('nome').value;
    var cpfDigitado = document.getElementById('cpf_digitado').value;
    var endereco = document.getElementById('endereco').value;
    var numeroCasa = document.getElementById('numero_casa').value;
    var telefoneCelular = document.getElementById('telefone_celular').value;

    if (nome === '' || cpfDigitado === '' || endereco === '' || numeroCasa === '' || telefoneCelular === '') {
        alert("Campos obrigatorios não preenchidos");
    }
    else {
        alert("Formulario Enviado com Sucesso!");
    }
}
