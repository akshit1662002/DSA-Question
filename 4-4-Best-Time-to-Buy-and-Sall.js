function maxProfit(price) {
  let min = price[0];
  let maxProfit = 0;
  for (i = 1; i < price.length; i++) {
    if (price[i] < min) {
      min = price[i];
    }
    if (price[i] - min > maxProfit) {
      maxProfit = price[i] - min;
    }
  }
  return maxProfit;
}

const price = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(price));
