#!BENCHMARK
console.time("All");
let suma = 0;

//CICLO 1
console.time("Ciclo 1");
for (let i = 0; i < 100000000; i++) {
  suma++;
}
console.timeEnd("Ciclo 1");

//CICLO 2
console.time("Ciclo 2");
for (let i = 0; i < 100000000; i++) {
  suma++;
}
console.timeEnd("Ciclo 2");

console.time("Async");

function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("End of Async Function");
      resolve();
    });
  });
}

asyncFunction().then(() => {
  console.timeEnd("Async");
});

console.timeEnd("All");
