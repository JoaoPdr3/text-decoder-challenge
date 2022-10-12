// - Select elements - //
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const btnCopy = document.getElementById("btn-copy");

const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");

const divInfo = document.querySelector(".fig-info");
const divTextOutput = document.querySelector(".text-output");
const spanWarning = document.getElementById("warning");
// ---------------------=---------------------- //

// - Functions Encrypt and Decrypt Text - //
function encryptText(text) {
  let encryptText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return encryptText;
}

function decryptText(text) {
  let decryptText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return decryptText;
}

// ---------------------=---------------------- //
// - Elements CSS - //
function changElement(valueOne, valueTwo) {
  divInfo.style.display = valueOne
  divTextOutput.style.display = valueTwo;
}

function warningElement(bgColo, bxShadow, warningText) {
  spanWarning.style.backgroundColor = `${bgColo}`;
  spanWarning.style.boxShadow = `inset 0px -3px 0px 0px ${bxShadow}`;
  spanWarning.innerText = warningText;
  spanWarning.style.display = "block";

  //Animation hide
  setTimeout(() => {
    spanWarning.style.display = "none";
  }, 2000);
}

// ---------------------=---------------------- //
// - Events - //
btnEncrypt.addEventListener("click", function () {
  const regEx = /^[a-zA-Z \b]+$/gm
  let textValueInput = textInput.value.toLowerCase();

  if (textValueInput == "") {
    warningElement("#e45353", "#a33131", "Digite um texto para criptografar.");
    changElement("flex", "none");
  } else if (!regEx.test(textValueInput)) {
    warningElement("#e45353", "#a33131", "Não utilize acentuação ou qualquer caractere especial.");
    changElement("flex", "none");
  } else {
    textOutput.value = encryptText(textValueInput);
    warningElement("#51b04d", "#3a8038", "Texto criptografado com sucesso.");
    changElement("none", "block");
  }
});

btnDecrypt.addEventListener("click", function () {
  const regEx = /^[a-zA-Z \b]+$/gm
  let textValueInput = textInput.value.toLowerCase();

  if (textValueInput == "") {
    warningElement("#e45353", "#a33131", "Digite um texto para descriptografar.");
    changElement("flex", "none");
  } else if (!regEx.test(textValueInput)) {
    warningElement("#e45353", "#a33131", "Não utilize acentuação ou qualquer caractere especial.");
    changElement("flex", "none");
  } else {
    textOutput.value = decryptText(textValueInput);
    warningElement("#51b04d", "#3a8038", "Texto descriptografado com sucesso.");
    changElement("none", "block");
  }
});

btnCopy.addEventListener("click", function () {
  textInput.value = textOutput.value;

  //Copy text
  textOutput.select();
  document.execCommand('copy');

  warningElement("#303030", "#99978e", "Texto copiado para Área de Transferência.");
  changElement("flex", "none");
});






