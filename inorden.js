/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//Creamos la funcion de inorder

const inorder = (raiz, resultado) => {
  if (raiz == null) return;
  //Visitas del nodo
  inorder(raiz.left, resultado);

  let numero = raiz.val;
  resultado.push(numero);

  inorder(raiz.right, resultado);
};

//Definimos la funcion pricipal

let inorderTraversal = function (raiz) {
  //Uso de la funcion
  let resultado = [];
  inorder(raiz, resultado);
  return resultado;
};
