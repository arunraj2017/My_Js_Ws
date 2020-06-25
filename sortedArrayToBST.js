/**
 Given an array where elements are sorted in ascending order, 
 convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a 
binary tree in which the depth of the two subtrees of every node never differ 
by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the 
following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5 



 Solution:
 Find Center, go left, go right
 do it recursive
 **/


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function getBinaryTree(nums) {
    const node = findRecursive(nums, 0, nums.length -1);
    console.log(node);

}

function findRecursive(nums, left, right) {
    if(left > right) {
        return;
    }
    let mid = left + Math.floor((right - left)/2)
   let node = new Node(nums[mid]);
   node.left = findRecursive(nums, left, mid -1);
   node.right = findRecursive(nums, mid+1, right);
    return node;
}


getBinaryTree( [-10,-3,0,5,9]);





