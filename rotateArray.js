/**
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, 
there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 2 * 10^4
It's guaranteed that nums[i] fits in a 32 bit-signed integer.
k >= 0
 */



/**Brute Force O(ab) */
function rotateArray(nums, rc) {

    for(let i=0; i<rc; i++) {
        let prev = nums[nums.length-1];

        for(let k = 0; k<nums.length; k++) {
            if(prev) {
                let temp = nums[k];
                nums[k] = prev;
                prev = temp;
            }
           
        }

    }
return nums;
}

//console.log(rotateArray([1,2,3,4,5,6,7], 4));

function rotateWithNewArray(nums, rc) {
    let retArray = [];
    let startIndex = nums.length-1-rc;

    
    let start = nums.slice(startIndex);
    let end = nums.slice(0,startIndex);
    retArray.concat(start, end);
    console.log(retArray);
}

console.log(rotateArray([1,2,3,4,5,6,7], 3))
