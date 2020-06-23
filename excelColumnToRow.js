/**
 * 
 * Given a column title as appear in an Excel sheet, 
 * return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701
 */


  /* {
     'a' : 1,
     'b' : 2,
     'c' : 3
      .........
    
    }

aa = 26 * 1 + 1
bb = 26 *2 + 2
zz = 26 * 26 + 26

*/

const alphabets = {
  'a' : 1,
  'b' : 2,
  'c' : 3,
  'd' : 4,
  'e' : 5,
  'f' : 6,
  'g' : 7,
  'h' : 8,
  'i' : 9,
  'j' : 10,
  'k' : 11,
  'l' : 12,
  'm' : 13,
  'n' : 14,
  'o' : 15,
  'p' : 16,
  'q' : 17,
  'r' : 18,
  's' : 19,
  't' : 20,
  'u' : 21,
  'v' : 22,
  'w' : 23,
  'x' : 24,
  'y' : 25,
  'z' : 26
}

function getExcelColumnNumber(dat) {
  let out = 0; 
    for(let i=0; i<dat.length;i++) {
    out = out*26 + alphabets[dat[i].toLowerCase()];
  }
  
 return out

}


console.log(getExcelColumnNumber('A'));