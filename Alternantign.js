/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  //Conversion de la entrada
  let digitos = n.toString().split("").map(Number);
  let sum = 0;
  for (let i = 0; i < digitos.length; i++) {
    if (i % 2 === 0) {
      sum += digitos[i];
    } else {
      sum -= digitos[i];
    }
  }

  return sum;
};

let entrada = 521;
let resultado = alternateDigitSum(entrada);
console.log(resultado);
