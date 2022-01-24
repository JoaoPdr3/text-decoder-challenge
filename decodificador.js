var entradaTexto = document.querySelector("#text-input");

var botaoDescriptografar = document.querySelector("#btn-decodificar");

var saidaMsg = document.querySelector("#output-mensg");

var naoPermitiAcentuacao = new RegExp("^[a-z \b]+$")

function descriptografar(texto) {
    var letrasDecodificadas = texto.replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ufat/gi, 'u')
    .replace(/ober/gi, 'o');

    return letrasDecodificadas;
}

botaoDescriptografar.addEventListener('click', function() {
    saidaMsg.value = semAcentuacao(descriptografar(entradaTexto.value));
    entradaTexto.value = '';
 })