/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const original = x;
  let nuevo = 0;
  while (x > 0) {
    let digito = x % 10;
    nuevo = nuevo * 10 + digito;
    x = Math.floor(x / 10);
  }
  return original === nuevo;
};
let is = false;
const numero = 121;

if (isPalindrome(numero)) {
  is = true;
}
console.log(is);
