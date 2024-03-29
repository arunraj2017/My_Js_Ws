/**
 * 
 * Say you have an array for which the ith element is the price 
 * of a given stock on day i.

If you were only permitted to complete at most one 
transaction (i.e., buy one and sell one share of the stock), 
design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

 7 5 10 1 3
 0 0 5 
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input:  [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

 */
/** 
 * 
*/
// console.log(findMaxTrade( [7,6,4,3,1]));
// console.log(findMaxTrade([7, 5, 10, 1, 3]));
console.log(findMaxTradeOofN([7, 5, 10, 1, 3]));
console.log(findMaxTradeOofN([7,6,4,3,1]));



function findMaxTrade(nums) {

    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 0;
    }

    const dpa = [];
    dpa[0] = 0;
    let buy = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < buy) {
            buy = nums[i];
            dpa[i] = 0;
        } else {
            let profit = nums[i] - buy;
            dpa[i] = Math.max(dpa[i - 1], profit);
        }
    }
    return dpa.pop();

}

function findMaxTradeOofN(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let profit = 0;

    for (let i in nums) {
        if (nums[i] < min) {
            min = nums[i];
        } else {
            profit = Math.max(profit, (nums[i] - min))
        }
    }
    return profit;
}
