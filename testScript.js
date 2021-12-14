/**Test Script to test self **/
/*
Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

function findIslands(nums) {
 if(nums.length===0) {
   return 0;
 }
 let count = 0;
 for(let i=0; i<nums.length; i++) {
   for(let j=0; j<nums[i].length; j++) {
     count+= checkForIslands(i,j,nums);
   }
 }
 return count;

}

function checkForIslands(i,j, nums) {
  
  if(i>nums.length-1 || i<0 || j > nums[i].length-1 || j<0){
    return 0;
  }
  if(nums[i][j] === 0) {
    return 0;
  }
  let count = 1;
  nums[i][j]=0;
  checkForIslands(i-1, j, nums);
  checkForIslands(i+1, j, nums);
  checkForIslands(i, j-1, nums);
  checkForIslands(i, j+1, nums);
  return count;

}




let nms1 = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0]
  ];
let nms3 = [
[1,1,0,0,0],
[1,1,0,0,0],
[0,0,1,0,0],
[0,0,0,1,1]
];

console.log(findIslands(nms3))