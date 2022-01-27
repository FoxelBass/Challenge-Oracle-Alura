let entradaUsuario = document.querySelector("#areaUno");
let botonEncriptar = document.querySelector("#encriptar");
let botonDesencriptar = document.querySelector("#desencriptar");

/* var textarea = document.querySelector("#area1");

var button = document.querySelector("button");
button.onclick = encriptar;

function encriptar() {
  let texto = textarea.value;
  console.log(texto);
}

//console.log(textarea); */

function validarTexto(texto) {
  let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
  let mayusculas = /[A-Z]/g;
  let vacio = "";

  if (texto.match(mayusculas) || texto.match(caracteres)) {
    alert("No se permiten caracteres especiales ni mayusculas");
    return true;
  } else if (texto == vacio) {
    alert("Ingrese un mensaje para encriptar");
    return true;
  } else {
    return false;
  }
}

botonEncriptar.addEventListener("click", function () {
  let textInput = document.querySelector("#input-texto").value;
  let textoIngresado = textInput;

  if (validarTexto(textoIngresado) == false) {
    let Encriptado = encriptar(textoIngresado);
    let resultado = document.querySelector("#msg");
    resultado.value = Encriptado;
  } else {
    textInput = "";
  }
});
