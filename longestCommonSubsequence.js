
/**
 * 
 * given two strings s1 s2
 * ABAZDC , BACBAD =>ABAD
 * AGGTABB , GXTXAYB =>GTAB
 * aaaa , aa  => aa
 * 
 * 
 * https://www.youtube.com/watch?v=sSno9rV8Rhg
 * 
 * solution:
 * 2d matrix
 * if same, take diagonal left +1
 * else max(top,left)
 * 
 */

/*



 */

 function findLongestSubstring(s1,s2) {
     if(s1.length === 0 || s2.length === 0) {
         return '';
     }
    const dp = [[]]
    //fill the array
    for(let i = 0; i<=s1.length; i++) {
        if(dp[i] == null) {
            dp[i] = []
        }
        for(let j=0; j<=s2.length; j++) { 
            if(i === 0 || j === 0) {
                dp[i][j] = 0;
            }else if(s1[i-1] === s2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
           }else {     
               dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
           }
        }
    }


   

    return getLongestSubstring(dp,dp.length-1, dp[dp.length-1].length-1,s1, '');


 }

 function getLongestSubstring(dp, i, j, s1, finalStr) {
    if(i == 0 || j == 0){
        return finalStr;
    }

    if(dp[i][j-1]=== dp[i][j]){
        return getLongestSubstring(dp, i, j-1, s1, finalStr);
    }else if(dp[i][j-1] > dp[i-1][j]) {
        return getLongestSubstring(dp, i, j-1, s1, finalStr);
    }else if(dp[i-1][j] >dp[i][j-1]) {
        return getLongestSubstring(dp, i, j-1, s1, finalStr);
    }else{
        finalStr += s1[i-1];
        return getLongestSubstring(dp, i-1, j-1, s1, finalStr)
    }
}




 console.log(findLongestSubstring('stone','longest'));