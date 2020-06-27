/**
 * Given a sorted array nums, remove the duplicates in-place such that 
 * 
 * each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying 
the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two 
 of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five 
elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
 */


 /**
  * workbook
  * eg:
 0 0 1 1 1 2 2 3 3 4
 ---
 
 0 0 1 1 1 2 2 3 3 4
 0 1 0 1 1 2 2 3 3 4
 0 1 2 1 1 0 2 3 3 4
 0 1 2 3 1 0 2 1 3 4
 0 1 2 3 4 0 2 1 3 1

  */
var removeDuplicates = function(nums) {

    let i=0,j=1;
    while(j < nums.length) {
        if(nums[i] === nums[j]) {
            j++;
        }else{
            i++;
            swapElements(nums,i,j);
            j++;
        }
    }
    
    return nums.splice(0,i+1);
};

function swapElements(nums, i, j) {  
    let temp = nums[i];
    nums[i] = nums[j]
    nums[j] = temp;
}

console.log(removeDuplicates([1,1,2,2]));