/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  let contador = 0;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        let esEspecial = true;
        // Verificar la fila
        for (let k = 0; k < mat[i].length; k++) {
          if (k !== j && mat[i][k] !== 0) {
            esEspecial = false;
            break;
          }
        }
        // Verificar la columna
        for (let k = 0; k < mat.length; k++) {
          if (k !== i && mat[k][j] !== 0) {
            esEspecial = false;
            break;
          }
        }
        // Incrementar el contador si es especial
        if (esEspecial) {
          contador++;
        }
      }
    }
  }
  return contador;
};

// Elementos
let mat = [
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
];

let resultado = numSpecial(mat);
console.log(resultado); // Salida esperada: 1
