/**.
 * 
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
 */

function findMajorityEl(nums) {

    const elMap = {};
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element in elMap) {
            elMap[element] = elMap[element] + 1;
            if(elMap[element] > nums.length/2){
                return element;
            }
        } else {
            elMap[element] = 1;
        }
    }
    return 0;
}

console.log(findMajorityEl([2, 2, 1, 1, 1, 2, 2]));





