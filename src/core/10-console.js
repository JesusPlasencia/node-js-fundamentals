#!CONSOLE
//LOG
console.log("Log");

//WARNING
console.warn("Warning");

//INFO
console.info("Info");

//ERROR
console.error("Error");

//TABLA
var tabla = [
  {
    a: 1,
    b: "Z",
  },
  {
    a: 2,
    b: "C",
  },
];
console.table(tabla);

//GROUP
console.group("Conversation");
console.log("Hola");
console.group("SubConversation");
console.log("Hola como estás?");
console.log("Bien y tú");
console.groupEnd("SubConversation");
console.log("Bien");
console.log("Ok, ten buen día");
console.groupEnd("Conversation");

//TIME
function function1() {
  console.group("Function 1");
  console.log("Ahora estamos en la Function 1");
  console.log("Still...");
  console.log("Still...");
  function2();
  console.log("Back to the Function 1");
  console.log("Fin de la Function 1");
  console.groupEnd("Function 1");
}

function function2() {
  console.group("Function 2");
  console.log("Ahora estamos en la Function 2");
  console.groupEnd("Function 2");
}

function1();

//COUNT
console.count("Ejecución");
console.count("Ejecución");
console.countReset("Ejecución");
console.count("Ejecución Reseteo");
console.count("Ejecución Reseteo");
console.count("Ejecución Reseteo");
console.count("Ejecución Reseteo");
