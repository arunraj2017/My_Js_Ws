/**
 * 
 * The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

 

Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
Note:

1 <= people.length <= 50000
1 <= people[i] <= limit <= 30000
 */

function findMaxBoats(nums, sz) {
    if(nums.length === 0) {
      return 0;
    }
    if(nums.length === 1) {
      return 1;
    }
    nums.sort((a,b)=>b-a);
    let count = 0;
    let i = 0, j = nums.length-1;
    while(i <= j) {
  
      if(nums[i] + nums[j] > sz) {
        count ++;
        i++;
      }else{
        count++;
        i++;
        j--;
      }
  
    }
    
  
  return count;
  
  }
  
  
  console.log(findMaxBoats([3,2,2,1],3))