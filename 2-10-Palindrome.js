//Palindrome Number

function Palindrome(n) {
  let xCopy = n;
  let rev = 0;
  while (n > 0) {
    // last digit
    rem = n % 10;
    // add in reverse number
    rev = rev * 10 + rem;
    // remove last digit
    n = Math.floor(n / 10);
  }
  // if (rev == n) {
  //   return true;
  // } else return false;
  return rev === xCopy;
}

const r = Palindrome(121);
console.log(r);

// how to find Last Digit  n % 10
// how to find remove Last Digit n / 10
// how to add number (10 * rev) + rem
