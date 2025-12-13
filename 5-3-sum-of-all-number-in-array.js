function arrSum(len) {
  if (len === 0) return arr[0];
  return arr[len] + arrSum(len - 1);
}

let arr = [2, 3, 4, 5, 6];
console.log(arrSum(arr.length - 1));
