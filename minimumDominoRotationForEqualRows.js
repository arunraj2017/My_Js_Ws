/*

https://www.youtube.com/watch?v=BFtsYTl3KP4

In a row of dominoes, A[i] and B[i] represent 
the top and bottom halves of the i-th domino.  
(A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the i-th domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the 
values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.


Example1:
Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by A and B:
 before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in
 the top row equal to 2, as indicated by the second figure.



Example 2:

Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes 
to make one row of values equal.
 

Note:

1 <= A[i], B[i] <= 6
2 <= A.length == B.length <= 20000
 */



function getMinimumSwapsForEqualRow(nums1, nums2) {

    if (nums1.length < 2 || nums2.length < 2) {
        return 1;
    }

    if (nums1[0] === nums2[0]) {
        return getMinimumSwaps(nums1, nums2, nums1[0]);
    } else {
        return  Math.max(getMinimumSwaps(nums1, nums2, nums1[0]), getMinimumSwaps(nums1, nums2, nums2[0]));
    }
}

function getMinimumSwaps(a, b, target) {
    let counta = 0;
    let countb = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== target && b[i] !== target) {
            return -1;
        } else if(a[i]!== target) {
            counta++;
        }else{
            countb++;
        }
    }
    return Math.min(counta,countb);
}


const A = [2,1,2,4,2,2], B = [5,2,6,2,3,2];
console.log(getMinimumSwapsForEqualRow(A,B));