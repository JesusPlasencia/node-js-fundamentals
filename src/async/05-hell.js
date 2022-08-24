#!CALLBACK HELL
function hola(nombre, myCallback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        myCallback(nombre);
    }, 1500);
};

function hablar(callbackTalk) {
    setTimeout(() => {
        console.log('Talking...');
        callbackTalk();
    }, 1000);
}

function adios(nombre, otherCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        otherCallback();
    }, 1000);
};

function conversacion(nombre, veces, myCallback) {
    if(veces >= 0){
        hablar(function () {
            conversacion(nombre, --veces, myCallback);
        })
    } else {
        adios(nombre, function () {
            console.log('Finalizando Proceso');
        })
    }
}

console.log('Iniciando Proceso...');
hola('Carlos', function (nombre) {
    conversacion(nombre, 3, adios);
});