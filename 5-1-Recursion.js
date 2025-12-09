//function call itself to solve smaller version of the same problem
// Two part of recursion
// 1- Base Case  -> Stop condition (when to stop calling itself)
// 2- Recursive Case -> Part where the function call itself

function fun(num) {
  if (num === 0) return; // this is the base case , when you want to stop the recursion
  console.log(num);
  num = num - 1;
  fun(num);
}

const num = 10;
fun(num);
