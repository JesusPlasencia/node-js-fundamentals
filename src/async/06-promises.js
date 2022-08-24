#!PROMISES
function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Talking with ${nombre}...`);
      //resolve(nombre);
      reject("Error 404");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function fin(nombre) {
  console.log(`Terminado de tu proceso ${nombre}.`);
}

const handlingError = (error) => {
  console.error("Ha habido un error");
  console.error(error);
};

console.log("Iniciando el proceso...");
hola("Jesus").then(hablar).then(adios).then(fin).catch(handlingError);
