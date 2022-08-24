#!PROCESS
process.on("beforeExit", () => {
  console.log("Medio Proceso");
});

process.on("exit", () => {
  console.log("Fin Proceso");
  setTimeout(() => {
    console.log("You never will see this.");
  });
});

process.on("uncaughtException", (error, origin) => {
  console.error("Catching an error");
  setTimeout(() => {
    console.error("From UncaughtException");
  }, 0);
});

//try {
functionNonExist();
// } catch (error) {
//   console.error(error);
// }

console.log("You wont see this message, if you don't catch the error");
