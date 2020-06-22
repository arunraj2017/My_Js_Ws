/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest 
path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

function findMaxDepth(node, depth, max_d) {
    if(!node) {
        return max_d;
    }
    depth += 1;
    if(depth > max_d) {
        max_d = depth;
    }
    let tempm =findMaxDepth(node.left, depth, max_d);
    return findMaxDepth(node.right, depth, tempm);
    //return max_d;

}

const nd = new Node(3);
nd.left = new Node(9);
nd.right = new Node(20);
nd.right.left = new Node(15);
nd.right.left.left = new Node(20);
nd.right.right = new Node(7);

console.log(findMaxDepth(nd,0,0));