let entradaUsuario = document.querySelector("#textarea-text");
let botonEncriptar = document.querySelector("#encriptar");
let botonDesencriptar = document.querySelector("#desencriptar");
var botonCopiar = document.querySelector("#copiar");

function validarTexto() {
  let mayusculas = /[A-Z]/g;
  let caracteresEspeciales = /[áéíóú]/g;

  if (texto.match(mayusculas)) {
    return true;
  } else if (texto.match(caracteresEspeciales)) {
    return true;
  } else {
    return false;
  }
}

//Funcion encriptar
botonEncriptar.onclick = encriptar;

function encriptar() {
  let expSearch = new RegExp("[A-Z]", "g");
  var text = document.querySelector("#textarea-text").value;
  var textoEncriptado = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector("#msg").value = textoEncriptado;
  document.querySelector("#textarea-text").value;
}

//Funcion desencriptar
botonDesencriptar.onclick = desencriptar;
function desencriptar() {
  let expBusqueda = new RegExp("[A-Z]", "g");
  var texto = document.querySelector("#textarea-text").value;
  var textoCifrado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.querySelector("#msg").value = textoCifrado;
  document.querySelector("#textarea-text").value;
}

//Funcion copiar
botonCopiar.addEventListener("click", function (boton) {
  var copiarTexto = document.querySelector("#msg");
  copiarTexto.select();
  document.execCommand("copy");
  document.querySelector("#msg").value = " ";
});