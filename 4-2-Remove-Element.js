function removeElement(arr, val) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    //shift element to left if it is not equal to val
    if (arr[i] != val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}

const arr = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
const result = removeElement(arr, val);

console.log("result ", result);
