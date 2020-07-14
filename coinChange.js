/**
 * find minimum coins required to make up the given amount
 *  input = [1,2,5] total = 11
 *  output = 3
 * explanation : 5+5+1
 * 
 * soln:
 * DP
 * dp array length total +1 = accounting for 0 as awell
 * filling it with some number > total
 *  dp[x,x,x,x,x,x]
 * 
 * outer loop from 0 to total
 * inner loop to iterate coins
 * 
 * dp[0]= 0
 * 1
 * 
 */


 function findMinCoins(coins, total) {
     let dp = [];
    for(let i=0; i<total +1 ; i++) {
        dp[i] = total+1;
    }
    dp[0] = 0;
    
    for(let i=0; i<=total; i++) {
        for(let j=0; j<coins.length; j++) {
            
            if(coins[j] <= i) {
                dp[i] =  Math.min(dp[i], 1+ dp[i - coins[j]]);
            }

        }

    }
  return dp[total] >total? -1: dp[total];
 }


 console.log(findMinCoins([1,2,5], 11));