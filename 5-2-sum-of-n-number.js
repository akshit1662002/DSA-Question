// let n = 5;
// let result = 0;
// function sum(x) {
//   if (x > n) return;
//   result = result + x;
//   x = x + 1;
//   sum(x);
//   return result;
// }

// let x = 0;
// const result2 = sum(x);
// console.log(result2);

//we have another solution of it

function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}

console.log(sum(5));
