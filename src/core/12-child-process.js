const { exec, spawn } = require("child_process");

// EXEC: NOS PERMITE EJECUTAR ARCHIVOS COMO UN SUB-PROCESO, por ejemplo: ejecutar archivos py desde node.
// exec("ls -al", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

// SPAWN:
let proceso = spawn("ls", ["-al"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (dato) {
  console.log("KILLED:" + proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", function () {
  console.log("KILLED:" + proceso.killed);
  console.log("Finish");
});
