/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  let one = left.toString(2).padStart(32, "0");
  let two = right.toString(2).padStart(32, "0");

  let resultado = "";
  //Comparcion
  for (let i = 0; i < 32; i++) {
    if (one[i] === two[i]) {
      resultado += one[i];
    } else {
      break;
    }
  }
  //Bits completos
  resultado = resultado.padEnd(32, "0");

  return resultado;
};

const binaryToDecimal = (binaryStr) => {
  // Convierte la cadena binaria a un número decimal
  return parseInt(binaryStr, 2);
};

//uso
let left = 5;
let right = 7;

//uso de la funcion
let resultado = rangeBitwiseAnd(left, right);
//decimal
let decimal = binaryToDecimal(resultado);

console.log(decimal);
