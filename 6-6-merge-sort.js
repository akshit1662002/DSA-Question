function sortArray(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = sortArray(arr.slice(0, mid));
  let right = sortArray(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}

let arr = [9, 3, 8, 5, 1, 4, 6, 0];
console.log(sortArray(arr));
