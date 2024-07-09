/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = (s, k) => {
  while (s.length > k) {
    let resultado = [];
    // Dividir la cadena y sumar los dígitos
    for (let i = 0; i < s.length; i += k) {
      let sub = s.slice(i, i + k);
      let sum = Array.from(sub).reduce(
        (acc, char) => acc + parseInt(char, 10),
        0
      );
      resultado.push(sum);
    }
    s = resultado.join("");
  }
  return s;
};

let s = "123456789";
let k = 3;
let resultado = digitSum(s, k);
console.log(resultado);
