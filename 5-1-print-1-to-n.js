let n = 10;
function print(x) {
  if (x > n) return;
  console.log(x);
  x = x + 1;
  print(x);
}

print(1);
 