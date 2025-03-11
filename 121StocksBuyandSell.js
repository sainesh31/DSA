/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  debugger;
  if (prices.length === 0) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5
