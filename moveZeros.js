/*Given an array nums, write a function to move all 0's to the end of it
 while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/






function moveZeros(input) {

    for(let i = 0; i < input.length; ++i) {
        if(input[i] == 0) {
            let nextInd = findNextNotZero(input, i+1);
            if(nextInd) {
                swapElements(input, i, nextInd);
            } else{
                return input;
            }
            
        }
    }
    return input;

}

function findNextNotZero(input, index) {
    while(index < input.length) {
        if(input[index] != 0) {
            return index;
        }else{
            ++index;
        }
    }
    return undefined;
}

function swapElements(input, i , j) {
    let tempVal = input[i];
    input[i] = input[j];
    input[j] = tempVal;
   
}



function onePassSolution(nums) {
    let left =0;
		for(let i=0;i<nums.length;i++)
			if(nums[i]!=0){
				//left++;
                swapElements(nums,i,left);
                left++;
            }
            return nums;
}

//console.log(moveZeros([1,20,40]));
console.log(onePassSolution([0,20,0,0,40]))