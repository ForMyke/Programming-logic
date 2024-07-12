/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

//Contador
let counter = createCounter(10);
//llamadas
let llamadas = ["call", "call", "call"];

// Ejecutar la función counter por cada "call" y guardar los resultados
let resultados = new Array(llamadas.length);
for (let i = 0; i < llamadas.length; i++) {
  resultados[i] = counter();
}

console.log(resultados); // Salida esperada: [10, 11, 12]
