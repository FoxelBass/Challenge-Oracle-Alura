//Declaracion de variables
let entradaTexto = document.querySelector("#textarea-text");//captura de texto de la etiqueta <textarea>
let botonEncriptar = document.querySelector("#encriptar");//captura del click del boton
let botonDesencriptar = document.querySelector("#desencriptar");//captura del click del boton
let botonCopiar = document.querySelector("#copiar");//captura del click del boton

//Funcion que valida si el texto ingresado cumple con los requisitos pedidos
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
//Funcion que valida si hay texto en el campo de ingreso de datos
function validarEntradaTexto(texto) {
  if (texto.length === 0) {
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

    if (validarEntradaTexto(entradaTexto.value)) {
      alert("Ingresa el texto a encriptar");
    } else {
      resultado = encriptar(entradaTexto.value);
      //areaResultado.value = resultado;
    }
}

//Funcion desencriptar
botonDesencriptar.onclick = desencriptar;

function desencriptar() {
  let expBusqueda = new RegExp("[A-Z]", "g");
  var texto = document.querySelector("#textarea-text").value;
  var textoEncriptado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    document.querySelector("#msg").value = textoEncriptado;
    document.querySelector("#textarea-text").value;
}

//Funcion copiar
botonCopiar.addEventListener("click", function (boton) {
  var copiarTexto = document.querySelector("#msg");
  copiarTexto.select();
  document.execCommand("copy");
  document.querySelector("#msg").value = " ";
})

