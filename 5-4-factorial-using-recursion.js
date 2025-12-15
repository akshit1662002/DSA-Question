let fact = 1;
function factorial(n) {
  if (n === 0) return;
  fact = fact * n;
  n = n - 1;
  factorial(n);
  return fact;
}

console.log(factorial(10));
