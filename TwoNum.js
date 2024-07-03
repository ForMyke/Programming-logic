/**
 * Encuentra dos números en el array que sumen el valor objetivo.
 * @param {number[]} nums - Un array de números.
 * @param {number} target - El número objetivo.
 * @return {number[]} - Un array con los dos números que suman el objetivo o un array vacío si no se encuentran.
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [[i], [j]];
      }
    }
  }
  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
