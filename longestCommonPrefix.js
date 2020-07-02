/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
 */

 function longestPrefixCounter(input) {

    if(input.length === 0) {
        return "";
    }
    input.sort();
    const commonMap = {};
    let prev = '';
    for(let i = 0; i<input.length; i++) {
        let dat = input[i];
        if(dat in commonMap) {
            commonMap[dat] = commonMap[dat]++;
        } else {
            for(let j = 0; j<dat.length; j++) {
                if(prev[j]!=null) {
                    
                }
            }
        }
    }
 }

 