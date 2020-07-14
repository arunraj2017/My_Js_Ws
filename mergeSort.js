/**
 * 
 * implement merge sort
 */

 function doMergeSortArray(nums) {

    if(nums.length <= 1) {
        return nums;
    }
    const middle = Math.floor(nums.length/2);
    const left = nums.slice(0, middle);
    const right= nums.slice(middle);
    return doMerge(doMergeSortArray(left), doMergeSortArray(right));

 }

 function doMerge(left, right) {
     let arr = []
     while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift())
        }else{
            arr.push(right.shift());
        }
     }
     return arr.concat(left.slice()).concat(right.slice());  
 }


 console.log(doMergeSortArray([3,2,7,5,4,6,8]));