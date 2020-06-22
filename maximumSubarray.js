/**
 * Given an integer array nums, find the contiguous 
 * subarray (containing at least one number) which 
 * has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, 
try coding another solution using the divide and conquer approach, which is more subtle.
 * 
 */





function findMaxSubarraySum(ary) {

    let max_so_far = Number.MIN_SAFE_INTEGER, max_end_here =0;
    for(let i=0; i<ary.length; i++) {
      
        max_end_here += ary[i];

        if(max_so_far < max_end_here) {
            max_so_far = max_end_here;
        }
        if(max_end_here < 0) {
            max_end_here = 0
        }
    }
    return max_so_far;
}

console.log(findMaxSubarraySum([-2,-1]));