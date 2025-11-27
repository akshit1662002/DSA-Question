// WAF that return the count of digit in a number

// Handle Edge Case
function Countdigit(n) {
  if (n === 0) return 1;
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

const result = Countdigit(-68);
console.log(result);

//We have 3 method Math.Floor , Math.ceil , Math.round
// if you want to change the negative number to positive use Math.abs , when we have a positive number it will change to positive number
 