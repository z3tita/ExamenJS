function _id(ident) {
    return document.getElementById(ident);
}

function factorial() {

    var entf = _id("entradaFactorial").value;
    var resf = 1;
    var opf = "";

    entf = parseInt(entf);

    if (entf < 0) {
        _id("resultatFactorial").innerHTML = "Este numero es negativo, no pienso calcularo, quien te crees que soy :(";
    } else {

        for (var f = entf; f > 0; f--) {
            resf = resf * f;
            opf += f;

            if (f > 1) {
                opf += " * ";
            }

        }

        _id("resultatFactorial").innerHTML = resf;
        _id("operacionsFactorial").innerHTML = opf;

    }

}

function calculaIVA() {

    /*
    100 * 1,21

    121 / 1+iva

    121-100 = iva pagado
    */

    var coniva = _id("preuAmbIVA").value;
    var iva;
    var porcen = _id("tipusIVA").value;
    var noiva;

    //iva.value = iva.toPrecision(2);
    //noiva.value = noiva.toPrecision(2);

    noiva = coniva / (1+porcen/100);
    iva = coniva - noiva;

    _id("IVA").innerHTML = iva.toFixed(2);
    _id("preuSenseIVA").innerHTML = noiva.toFixed(2);

}

function canviaFons(tipus) {

    var colorFondo;

    if (tipus == "random") {

        var gris = Math.floor(Math.random() * 255);
        colorFondo = "rgb(" + gris + "," + gris + "," + gris + ")";

        if (gris>=124){
            _id("cos").style.color = "white";
        }
        
    } else{
        colorFondo = "white";
        _id("cos").style.color = "black";
    }

    _id("cos").style.backgroundColor = colorFondo;

}