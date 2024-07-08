/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = (nums) => {
  //defincion de dos varibles
  let contador = 0;
  let candidato = null;
  //Entrada de bucle
  for (let num of nums) {
    if (contador === 0) {
      candidato == num;
    }
    //Operador ternario
    contador += num === candidato ? 1 : -1;
  }
  return candidato;
};
