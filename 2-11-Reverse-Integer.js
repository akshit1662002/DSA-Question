var reverse = function (x) {
  let copy = x;

  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);

  if (rev < -limit || rev > limit - 1) return 0;

  return copy < 0 ? -rev : rev;
};
