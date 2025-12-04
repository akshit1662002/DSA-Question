function moveZeroes(nums) {
  let p = 0;
  let temp;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      temp = nums[p];
      nums[p] = nums[i];
      nums[i] = temp;
      p++;
    }
  }
  return nums;
}

let nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result);
