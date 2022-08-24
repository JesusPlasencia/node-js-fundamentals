#!ASYNC AND AWAIT
async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hello " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Talking with ${nombre}...`);
      resolve(nombre);
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Goodbye " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function fin(nombre) {
  console.log(`Your process has finished ${nombre}.`);
}

async function main() {
  console.log("Start");
  let nombre = await hola("Hello");
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await adios(nombre);
  console.log("End");
}

main();
