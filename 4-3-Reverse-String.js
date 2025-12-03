function reverseString(s) {
  for (let i = 0; i < s.length / 2; i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
}

const s = ["a", "k", "s", "h", "i", "t"];

console.log(reverseString(s));
