/*
https://www.youtube.com/watch?v=fTD6Se3ZtEo&feature=youtu.be
*/
function countTotalWater(nums) {
    if (nums == null && nums.length < 3) {
      return 0;
    }
  
  let max_left = [];
  let max_right = [];
  max_left[0] = nums[0];
  max_right[nums.length-1] = nums[nums.length-1];
    //find left maxs
    for (let i = 1; i < nums.length; i++) {
        max_left[i] = Math.max(max_left[i-1], nums[i]);
    }
    //find right maxs
    for(let i = nums.length-2; i>=0; i--) {
      max_right[i] = Math.max(nums[i], max_right[i+1]);
    }
    //find minima across these two & subtract with the nums[i]
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum += Math.min(max_left[i], max_right[i]) - nums[i];
    }
    return sum;
  }
  
  console.log(countTotalWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
  