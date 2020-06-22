/**
 * 
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
 */


 function getSingleNumber(nums) {
    const tempMap = {}
    for(let i=0; i<nums.length; i++) {
        let key = nums[i];
       if(key in tempMap) {
           tempMap[key] = tempMap[key] + 1;
       } else {
           tempMap[key] = 1;
       }
    }
    for(let dat in tempMap) {
        if(tempMap[dat] == 1){
            console.log( dat);
        }
    }
    
 }

 getSingleNumber([4,1,2,1,2]);