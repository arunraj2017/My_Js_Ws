/**
 * 
 * https://www.youtube.com/watch?v=HKHkzKvb0J4
 * 
 * 
 * Suppose you have a random list of people standing in a queue. 
 * Each person is described by a pair of integers (h, k), 
 * where h is the height of the person and k is the number of people in front of this 
 * person who have a height greater than or equal to h. Write an algorithm to 
 * reconstruct the queue.

Note:
The number of people is less than 1,100.


Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

 */

/**
 * [4,4] [5,0] [5,2] [6,1] [7,0]
 * 
 */

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = (people) => {

    const compare = ([h1, k1], [h2, k2]) => {
        if (h1 !== h2) {
            return h2 - h1;
        } else {
            return k1-k2;
        }
    }

    people.sort(compare);
   const finalArray = [];
   for(const p of people) {
       finalArray.splice(p[1],0,p);
   }

   return finalArray;

}; 

console.log(
reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])
);