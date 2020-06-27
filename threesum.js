/**
 * Given an array nums of n integers, are there elements 
 * a, b, c in nums such that a + b + c = 0? Find all unique 
 * triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
    if(nums == null || nums.length < 3) {
        return 0;
    }
    const retArray = [];
    for(let i=0; i<nums.length; i++) {
        
        let tempSum = 0 - nums[i];
        const tempMap = {};
        for(let j = i+1; j<nums.length; j++){
            let ts = tempSum - nums[j];
            if(ts in tempMap) {
                retArray[retArray.length] = [nums[i], ts, nums[j]];
            }else{
                tempMap[nums[j]] = true;
            }
        }
        
        
    }


    return makeUnique(retArray);
    
};

function makeUnique(retArray) {

    let tempMap = {};
    for(let i=0; i<retArray.length; i++) {
        if(retArray[i].join('') in tempMap) {
            retArray[i] = null;

        }else{
            tempMap[retArray[i].join('')] = true;
        }
    }
    return retArray;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));