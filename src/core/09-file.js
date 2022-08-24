const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No he podido escribirlo", err);
    } else {
      console.log("Writted successfully");
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, function (err) {
    if (err) {
      console.error("No se ha podido borrar", err);
    } else {
      console.log("Deleted successfully");
    }
  });
}

function addContent(ruta, contenido, cb) {
  fs.appendFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No se ha podido anidar la data al archivo", err);
    } else {
      console.log("Anidado satisfactoriamente");
    }
  });
}

//leer(__dirname + "/newFile.txt", console.log);
//escribir(__dirname + "/newFile_1.txt", "Nuevo en Baufest", console.log);
//borrar(__dirname + "/newFile.txt", console.log);
//addContent(__dirname + "/newFile.txt", "\n2022", console.log);
