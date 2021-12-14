/*

https://leetcode.com/problems/letter-combinations-of-a-phone-number/solution/

Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) 
is given below. Note that 1 does not map to any letters.

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

NOTE:
Although the above answer is in lexicographical order,
 your answer could be in any order you want.
*/
/*

{
    2: abc
    3: def
    4: ghi

}

*/


const finalArray = [];
const letterCombs = {
    '2' : 'abc',
    '3' : 'def',
    '4' : 'ghi',
    '5' : 'jkl',
    '6' : 'mno',
    '7' : 'pqrs',
    '8' : 'tuv',
    '9' : 'wxyz'
}

function findAllCombinations(str) {
    if(str.length < 1) {
        return null;
    
    }
    getCombos(str, '');
    console.log(finalArray);

}

function getCombos(str, temp) {
    if(str.length === 0) {
        finalArray.push(temp);
        return;
    }
    const ltrs = letterCombs[str[0]];
    for (let i=0; i<ltrs.length; i++) {
        getCombos(str.substr(1), temp + ltrs[i]);
    }

}

findAllCombinations('2');