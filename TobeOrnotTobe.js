/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (compareVal) {
      if (val === compareVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (compareVal) {
      if (val !== compareVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

// Ejemplo de uso:

try {
  let entrada = expect(5).toBe(5); // devuelve 5
  let salida = expect(entrada); // permite continuar con el valor de entrada

  console.log(salida.toBe(5)); // true
  console.log(salida.notToBe(10)); // true
} catch (error) {
  console.error(error.message);
}

try {
  let entrada = expect(5).toBe(10); // lanza un error "Not Equal"
} catch (error) {
  console.error(error.message);
}

try {
  let entrada = expect(5).notToBe(5); // lanza un error "Equal"
} catch (error) {
  console.error(error.message);
}
