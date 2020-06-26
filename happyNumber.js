/**
 * 
 * 
 * Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process:
 Starting with any positive integer, replace the number by the sum of the squares 
 of its digits, and repeat the process until the number equals 1 (where it will stay), 
 or it loops endlessly in a cycle which does not include 1. 
 Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

// SOLUTION
if not a happy number, then the sum of squares comes again

*/


 /**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
        
        if(n == null || n == 0) {
            return false;
        }
        
        const tempMap = {};
        while(true) {
            let numStr = n.toString();
            let tempCount = 0;
            for(let i=0; i<numStr.length; i++) {
                tempCount += Math.pow(parseInt(numStr[i]),2);
            }
            if(tempCount == 1) {
                return true;
            }
            if(tempCount in tempMap) {
                return false;
            }else{
                tempMap[tempCount] = true;            
            }
            
            
            n = tempCount;
        }
        return false;
        
    };

console.log(isHappy(19));