/*

given array : [2,5,1,2,3,5,1,2,4]
return 1

given array : [2,1,1,2,3,5,1,2,4]
return 1
*/


function findFirstRecrringChar(nums) {
    let tempMap = {};
    for(let i=0; i<nums.length; i++) {
        let chr = nums[i];
        if(tempMap[chr]) {
            return chr;
        }else{
            tempMap[chr] = true;
        }
    }
    return null;
}

console.log(findFirstRecrringChar([2,1,1,2,3,5,1,2,4]));