#!ERROR FIRST CALLBACK (Patrón que parte de la premisa que toda funcion va a fallar)
function asincrona(callback) {
  //
  setTimeout(function () {
    try {
      let a = 3 + t;
      callback(null, a);
    } catch (err) {
      callback(err, null);
    }
  }, 1000);
}

try {
  asincrona(function (err, data) {
    if (err) {
      console.error("Hemos capturado el error");
      //   throw err; // NO FUNCIONA, YA QUE ESTE ERROR SE THROWEA AL OTRO HILO DONDE SE ESTÁ EJECUTANDO LA FUNCIÓN ASINCRONA
    } else {
      console.log(data);
    }
  });
} catch (e) {
  console.error("Hemos capturado el error");
  console.error(e);
}
