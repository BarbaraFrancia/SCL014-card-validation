/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var maskify= function(cc) {
   let visibles = cc.slice(-4),
    enmascarado = '';
  
    for (var i = (cc.length) - 4; i > 0; i--) {
      enmascarado += '#';
    }
    return enmascarado + visibles;
  }
  
  var validarTarjeta= function (cardNumber) {
    console.log(cardNumber);
  
    // JUNTAR NUMEROS
    cardNumber = cardNumber.split(' ').join("");
  
    // VALIDADOR SI ES TARJETA
    if (parseInt(cardNumber) <= 0 || (!/\d{15,16}(~\W[a-zA-Z])*$/.test(cardNumber)) || cardNumber.length > 16) {
  
      alert('Debe ingresar 16 numeros de su tarjeta de crédito');
  
    } else {
  
      // CREAR ARREGLO, METER NUMEROS E INVERTIR
  
      var carray = [];
      var largoNumeros = cardNumber.length;
      var validador = 0;
  
      for (var i = 0; i < largoNumeros; i++) {
        carray[i] = cardNumber.charAt(i);
      }
  
      console.log(carray);
      carray = carray.reverse();
      console.log(carray);
  
      //SELECCIONAR NUMEROS EN POSICION PAR 
  
      for (i = 0; i < carray.length; i++) {
  
        var number = carray[i];
  
        if (i % 2 != 0) {
          console.log('impar' + number);
  
          //MULTIPLICAR PARES POR DOS
          number = number * 2;
  
          if (number >= 10) {
  
            //SI ES MAYOR O IGUAL A 10 SUMAR DIGITOS DEL RESULTADO
  
          number = number.toString().split('').map(Number).reduce(function (a, b) {
              return a + b;
            }, 0);
  
          }
  
        } else {
          console.log('par' + number);
        }
  
        //SUMAR TODOS LOS DIGITOS Y VER SI SON MULTIPLOS DE 10
  
        number = parseInt(number);
        console.log(i + 'NUMEROS' + number);
  
        validador = validador + number;
  
        console.log('SUMA ' + validador);
      }
  
      var total = validador % 10;
      console.log('total ' + total);
      
      return total;
    }
  }
  var isValid = function(cardNumber) {
    return validarTarjeta(cardNumber) == 0;
  }
  module.exports = {
    maskify,
    validarTarjeta,
    isValid
  }
  


