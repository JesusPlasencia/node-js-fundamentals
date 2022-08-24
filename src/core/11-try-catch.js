#!TRY - CATCH
function anotherFunction() {
  breakDown();
}

function breakDown() {
  return 3 + z;
}

function breakDownAsync(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error in Async Function");
      cb(error);
    }
  });
}

try {
  breakDownAsync(function () {
    console.log("Error");
  });
} catch (error) {
  console.error("Something has gone wrong");
  console.error(error.message);
  console.error("Catched");
}

console.log("Final");
