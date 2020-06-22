/**
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 */

/**returns true if values are present */
 function findTwoSum(array, sum) {
    let valueMap = {};
    valueMap[array[0]] = true;
    for(let i=1; i<array.length; ++i) {
        let tempVal = sum - array[i];
        if(valueMap.hasOwnProperty(tempVal)) {
            return true;
        }else{
            valueMap[array[i]] = true;
        }
    }

    return false;
 }


 function findTwoSumIndices(arr, sum) {
     let valueMap = {};
     valueMap[arr[0]] = 0;
     for(let i=0; i<arr.length; ++i){
         let tempVal = sum - arr[i];
         if(valueMap.hasOwnProperty(tempVal)) {
             return [valueMap[tempVal], i];
         }else{
             valueMap[arr[i]] = i;
         }
         
     }
     return false;
 }

 //console.log(findTwoSum([2, 0, 11, 15, 7], 9))
console.log(findTwoSumIndices([7, 11, 15, 2], 9));