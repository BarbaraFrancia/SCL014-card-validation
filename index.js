/* eslint-disable no-undef */
var enviar = document.getElementById('enviar');
enviar.addEventListener("click", siguiente);
// SCOPE
// HOISTING
var validartarjeta = document.getElementById('validartarjeta');
validartarjeta.addEventListener("click", validar);

var volver = document.getElementById('volver');
volver.addEventListener("click", reinciar);

var volverin = document.getElementById('volverin');
volverin.addEventListener("click", reinciar);

function siguiente() {

  var rut = document.getElementById('rut').value;
  rut = rut.split('.').join('');
  rut = rut.split('-').join('');

  console.log(rut.length);
  /*    rut = parseInt(rut);
     console.log(rut); */

  if (rut.length < 8) {
    console.log('ERROR');

  } else {
    console.log('SUCCESS');

    document.getElementById('validador').classList.remove('hide');
    document.getElementById('principal').classList.add('hide');
  }
}

function validar() {
  var cardNumber = document.getElementById('card').value;
  var total = validarTarjeta(cardNumber);

  if (total != 0) {
    alert('Tarjeta Inválida');
    maskify(cardNumber);
    document.getElementById('validador').classList.add('hide');
    document.getElementById('invalida').classList.remove('hide');
    document.getElementById("invalido").innerHTML = (maskify(cardNumber));

  } else {
    alert('Tarjeta Válida');
    maskify(cardNumber);
    document.getElementById('validador').classList.add('hide');
    document.getElementById('aprobado').classList.remove('hide');
    document.getElementById("valido").innerHTML = (maskify(cardNumber));
  }
}

function reinciar() {
  console.log("reinciar");
  document.getElementById('principal').classList.remove('hide');
  document.getElementById('validador').classList.add('hide');
  document.getElementById('aprobado').classList.add('hide');
  document.getElementById('invalida').classList.add('hide');
}
//4137894711755904