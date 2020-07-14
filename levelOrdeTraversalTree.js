/**
 * 
 * Given a binary tree, return the level order traversal of its nodes' 
 * values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],


https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function getLevelOrder(node) {
    if (node == null) {
        return [];
    }
    const returnArray = [];
    const queue = [];

    queue.push(node);
    while (queue.length > 0) {
        let rowSize = queue.length;
        let row = []
        while (rowSize > 0) {
            const currentNode = queue.shift();
            if(currentNode.left!=null) {
                queue.push(currentNode.left);
            }
            if(currentNode.right!=null) {
                queue.push(currentNode.right);
            }
            row.push(currentNode.data);
            rowSize--;
        }
        returnArray.push(row);



    }
    return returnArray;

}




console.log(getLevelOrder(nd));