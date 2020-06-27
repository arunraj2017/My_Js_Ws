/**
 * 
 * Given an integer, write a function to determine if it is a power of three.

Example 1:

Input: 27
Output: true
Example 2:

Input: 0
Output: false
Example 3:

Input: 9
Output: true
Example 4:

Input: 45
Output: false
 */


 /**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n == null || n === 0 ) {
        return false;
    }
    if(n == 1) {
        return true;
    }
    if(n%3 !== 0) {
        return false;
    }
    return checkPower(n);
    
    
    
};

function checkPower(num) {
    if(num === 3) {
        return true;
    }
    if(num < 3) {
        return false;
    }
    return checkPower(num/3);
}

console.log(isPowerOfThree(27));