function bubbleSort(arr) {
  n = arr.length;
  let temp;
  for (i = 0; i < n - 1; i++) {
    let isSwapped = false;       // this way i optmized my bubble sorting algo 
    for (j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

arr = [2, 3, 6, 5, 4, 7, 8, 1, 9];
const result = bubbleSort(arr);
console.log(result);
 