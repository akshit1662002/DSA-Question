function maxconsecutive(nums) {
  let max = 0;
  let current = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;
    } else {
      current = Math.max(current, max);
      current = 0;
    }
  }
  return Math.max(current, max);
}

const arr = [1, 1, 0, 1, 1, 1];
const result = maxconsecutive(arr);
console.log(result);
