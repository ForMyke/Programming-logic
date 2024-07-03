const nums = [1, 2, 3, 4, 5];
let target = 9;
const sumTwo = () => {
  for (let i = 0; i <= nums.length; i++) {
    if (i && i + 1 == target) {
      console.log(i, i + 1);
    }
  }
};
