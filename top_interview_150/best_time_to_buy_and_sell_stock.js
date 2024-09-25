/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104 */

/**
 * @param {number[]} prices
 * @return {number}
 */

// Initial implementation using nested loop. 0(n ** 2)

function maxProfitSlow(prices) {
    maxProfitValue = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > maxProfitValue)
                maxProfitValue = prices[j] - prices[i];
        }
    }
    return maxProfitValue;
}

// Tried to solve it using tuples. I don't think this will work...
// But if I could have gotten it to work I think it would have been O(nlogn)

function maxProfitFast(prices) {
    if (prices.length == 1) return 0;
    pricesTouple = [];
    for (let i = 0; i < prices.length; i++) {
        pricesTouple.push([prices[i], i]);
    }
    pricesTouple.sort((a, b) => b[0] - a[0]);
    console.log(pricesTouple);
}

const testPrices1 = [7, 1, 5, 3, 6, 4];

const testPrices2 = [
    897, 265, 201, 86, 56, 657, 273, 25, 843, 625, 641, 332, 509, 463, 496, 97,
    779, 241, 970, 665, 87, 765, 276, 442, 25, 311, 10, 765, 224, 465, 296, 415,
    968, 40, 494, 151, 493, 159, 274, 444, 10, 792, 104, 200, 694, 193, 616,
    126, 754, 3, 489, 415, 863, 589, 646, 264, 88, 733, 132, 922, 794, 149, 496,
    135, 727, 355, 890, 102, 3, 668, 517, 852, 488, 445, 980, 964, 933, 754,
];

// console.log(maxProfitSlow(testPrices1));
// console.log(maxProfitSlow(testPrices2));

maxProfitFast(testPrices1);
maxProfitFast(testPrices2);
