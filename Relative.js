/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  //Ordenamiento
  let sortedScores = [...score].sort((a, b) => b - a);

  let rankMap = {};

  for (let i = 0; i < sortedScores.length; i++) {
    if (i === 0) {
      rankMap[sortedScores[i]] = "Gold Medal";
    } else if (i === 1) {
      rankMap[sortedScores[i]] = "Silver Medal";
    } else if (i === 2) {
      rankMap[sortedScores[i]] = "Bronze Medal";
    } else {
      rankMap[sortedScores[i]] = (i + 1).toString();
    }
  }
  //creacion de un nuevo array
  return score.map((elemento) => rankMap[elemento]);
};

//Entrada
let score = [5, 4, 3, 2, 1];
let final = findRelativeRanks(score);
console.log(final);
