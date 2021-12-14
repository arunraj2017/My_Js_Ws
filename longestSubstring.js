/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/



function findLongestLengthString(str) {
    if(str.length == 0) {
        return 0;
    }
    if(str.length == 1) {
        return 1;
    }
    let max_length = 0;
    let longestWord = [];
    for(let i=0; i<str.length; i++){
        let chr = str[i];

        if(longestWord.includes(chr)) {
            longestWord.splice(0,longestWord.length-1);
        }else{
            longestWord.push(chr);
            max_length = Math.max(max_length, longestWord.length)
        }
    }

return max_length

}

console.log(findLongestLengthString('abcab'))