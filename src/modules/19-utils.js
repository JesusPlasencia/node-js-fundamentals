//#region BCRYPT
// const bcrypt = require("bcrypt");

// const myPasswordSecret = "@jpl4s3nc1a_h1p3r_s3cr3ta!";

// bcrypt.hash(myPasswordSecret, 5, function (err, hash) {
//   console.log(hash);

//   bcrypt.compare(myPasswordSecret, hash, function (err, same) {
//     console.log(same);
//   });
// });
//#endregion

//#region MOMENT
// const moment = require("moment");
// let ahora = moment();
// console.log(ahora.toString()); //Fecha y Hora actual
// console.log(ahora.format("DD-MM-YYYY HH:mm:ss")); //Formato deseado
//#endregion MOMENT

//#region SHARP
const sharp = require("sharp");

sharp(__dirname + "/assets/js.png")
  .resize(80)
  .toFile(__dirname + "/assets/result.png");
//#endregion SHARP
