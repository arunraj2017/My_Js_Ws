/**
 * 
 * 
 * 
 * Count number of islands in a 2d array
 * 
11110
11010
11000
00000
 * 
 */


 function getNumberOfIslands(nums) {
    let count = 0;
     if(nums.length===0) {
         return count;
     } else {
         
         for(let i=0; i<nums.length; i++) {
           for(let j=0; j<nums[i].length; j++){
            count += dfs(nums,i,j);
           }
         }
     }
     return count;
     
 }

 function dfs(nums, i, j) {
     console.log(`i=${i}, j=${j}`);
    if(i<0 || i > nums.length-1 || j<0 || j >nums.length-1){
        return 0;
    }
    if(nums[i][j] === 0) {
        return 0;
    } 
    nums[i][j] = 0;
    const count = 1;
    dfs(nums, i-1, j);
    dfs(nums, i+1, j);
    dfs(nums, i, j-1);
    dfs(nums, i, j+1);
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

console.log(getNumberOfIslands(nms3));


