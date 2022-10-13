// - Select elements - //
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const btnCopy = document.getElementById("btn-copy");

const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");

const divImage = document.querySelector(".image-container");
const divOutput = document.querySelector(".output-container");
const spanAlert = document.querySelector(".alert");
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
  divImage.style.display = valueOne
  divOutput.style.display = valueTwo;
}

function alertElement(bgColor, bdrColor, alertText) {
  spanAlert.style.backgroundColor = `${bgColor}`;
  spanAlert.style.borderColor = `${bdrColor}`;
  spanAlert.innerText = alertText;

  //Animation hide
  setTimeout(() => {
    spanAlert.style.display = "block";
    setTimeout(() => {
      spanAlert.style.display = "none";
    }, 2000);
  }, 100)
}

// ---------------------=---------------------- //
// - Events - //
btnEncrypt.addEventListener("click", function () {
  const regEx = /^[a-zA-Z \b]+$/gm
  let textValueInput = textInput.value.toLowerCase();

  if (textValueInput == "") {
    alertElement("#6ba1f1", "#5078b4", "Digite um texto para criptografar.");
    changElement("flex", "none");
  } else if (!regEx.test(textValueInput)) {
    alertElement("#FF5447", "#c54137", "Não utilize acentuação ou qualquer caractere especial.");
    changElement("flex", "none");
  } else {
    textOutput.value = encryptText(textValueInput);
    alertElement("#8dec75", "#74c061", "Texto criptografado com sucesso.");
    changElement("none", "block");
  }
});

btnDecrypt.addEventListener("click", function () {
  const regEx = /^[a-zA-Z \b]+$/gm
  let textValueInput = textInput.value.toLowerCase();

  if (textValueInput == "") {
    alertElement("#6ba1f1", "#5078b4", "Digite um texto para descriptografar.");
    changElement("flex", "none");
  } else if (!regEx.test(textValueInput)) {
    alertElement("#FF5447", "#c54137", "Não utilize acentuação ou qualquer caractere especial.");
    changElement("flex", "none");
  } else {
    textOutput.value = decryptText(textValueInput);
    alertElement("#8dec75", "#74c061", "Texto descriptografado com sucesso.");
    changElement("none", "block");
  }
});

btnCopy.addEventListener("click", function () {
  textInput.value = textOutput.value;

  //Copy text
  textOutput.select();
  document.execCommand('copy');

  alertElement("#6ba1f1", "#5078b4", "Texto copiado para Área de Transferência.");
  changElement("flex", "none");
});






