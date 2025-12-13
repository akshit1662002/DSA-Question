function arrSum(len) {
  isOdd = arr[len] % 2 !== 0;
  if (len === 0)
    if (isOdd) {
      return arr[len];
    } else {
      0;
    }
  if (isOdd) {
    return arr[len] + arrSum(len - 1);
  } else {
    return arrSum(len - 1);
  }
}

let arr = [5, 2, 0, 3, 6, 7];
console.log(arrSum(arr.length - 1));
