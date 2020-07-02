
/*


11000
11000
00100
00011

area: 4

*/


function findMaxArea(nums) {
    if (nums == null || nums.length === 0) {
        return 0;
    }
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            max = Math.max(max, dfs(nums, i, j));
        }
    }
    return max;

}

function dfs(nums, i, j) {

    if(i<0 || i>=nums.length || j < 0 || j >=nums[i].length || nums[i][j]===0) {
        return 0;
    }
    nums[i][j] = 0;
    sum  = 1;
    sum += dfs(nums, i-1,j) 
    sum += dfs(nums, i+1,j)
    sum += dfs(nums,i,j-1)
    sum += dfs(nums,i,j+1);
    return sum;
}
let nms1 = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0]
    ];

console.log(findMaxArea(nms1));