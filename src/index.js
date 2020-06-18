//Guardar rut escrito en variable enviar, para llevarlo al validador

var enviar = document.getElementById('enviar');
enviar.addEventListener("click", siguiente);


function siguiente() {
    var rut = document.getElementById('rut').value;
    rut = rut.split('.').join('');
    rut = rut.split('-').join('');

    //console.log(rut.length);
 /*    rut = parseInt(rut);
    console.log(rut); */
    
    if (rut.length < 8) {
        console.log('ERROR');

    } else {
        console.log('SUCCESS');

        
        document.getElementById('validador').classList.remove('hide');
        document.getElementById('principal').classList.add('hide');

        var validartarjeta = document.getElementById('validartarjeta');
        validartarjeta.addEventListener("click", validar); 
    }
}