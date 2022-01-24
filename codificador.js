/* Regras Codificador: 
*   "e" é convertido para "enter" 
*   "i" é convertido para "imes"
*   "a" é convertido para "ai"
*   "o" é convertido para "ober"
*   "u" é convertido para "ufat"
*   Apenas letras minúsculas
*   Não permite acentuação   
*/

var entradaTexto = document.querySelector("#text-input");

var botaoCriptografar = document.querySelector("#btn-codificar");

var saidaMsg = document.querySelector("#output-mensg");

var naoPermitiAcentuacao = new RegExp("^[a-z \b]+$")

function criptografar(texto) {
    var letrasCodificadas = texto.replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/u/gi, 'ufat')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober');

    return letrasCodificadas;
}

function semAcentuacao(texto) {
    if(!naoPermitiAcentuacao.test(texto)) {

        return saidaMsg.value = ''
    } else {

        return texto;
    }


}

botaoCriptografar.addEventListener('click', function(){         
    saidaMsg.value = semAcentuacao(criptografar(entradaTexto.value));
    entradaTexto.value = '';
}) 

