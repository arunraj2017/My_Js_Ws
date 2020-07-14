/**
 * 
 *       3
 *     9    20
 *         15  7
 * 
 * max depth = 3
 * 
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/*
*       3
*     9    20
*         15  7
*/
function findMaxDepth(root, num) {
    if (root == null) {
        return num;
    }
    return Math.max(findMaxDepth(root.left, num+1), findMaxDepth(root.right, num+1));
}




const nd = new Node(3);
nd.left = new Node(9);
nd.right = new Node(20);
//nd.left.left = new Node(13);
//nd.left.right = new Node(14);
nd.right.left = new Node(15);
nd.right.right = new Node(7);

console.log(findMaxDepth(nd, 0));