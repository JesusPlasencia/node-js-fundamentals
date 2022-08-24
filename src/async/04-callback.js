#!CALLBACK
function greeting(name, myCallback) {
    setTimeout(() => {
        console.log(`Hola, ${name}`);
        myCallback(name);
    }, 1500);
}

function goodbye(name, otherCallback) {
    setTimeout(() => {
        console.log(`Adios, ${name}`);
        otherCallback();
    }, 1000);
    
}

console.log('Init Process')

greeting('Jesus', function (nombre) {
    goodbye(nombre, function () {
    console.log('Final Process');
    })
});

