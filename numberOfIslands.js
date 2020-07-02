/**
 * Given a 2d grid map of '1's (land) and '0's (water), 
 * count the number of islands. An island is surrounded by water and 
 * is formed by connecting adjacent lands horizontally or vertically.
 *  You may assume all four edges of the grid are all surrounded by water.

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


 ======
 Solution
 ======

 visit each node, do dfs, sink once visited.
 * 
 */

 function getNumberOfIslands(nums) {
     if(nums == null || nums.length===0) {
         return 0;
     }
    let count = 0;
    for(let i=0;i<nums.length;i++) {
        for(let j=0;j<nums.length;j++) {

            count += dfs(nums, i,j); 
        }
    }
    return count;

 }

function dfs(nums,i,j) {

    if(i < 0 || i >= nums.length || j < 0 || j >= nums[i].length || nums[i][j] ===0) {
        return 0;
    }
    //sink once visited
    nums[i][j] = 0;
    dfs(nums, i-1, j);
    dfs(nums, i+1, j);
    dfs(nums, i, j-1);
    dfs(nums, i, j+1);
    return 1;

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

console.log(getNumberOfIslands(nms3))