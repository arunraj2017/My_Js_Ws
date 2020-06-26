/**
 * 
 * 
 * Given a binary tree, check whether it is a mirror of itself 
 * (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
 

Follow up: Solve it both recursively and iteratively.


solution: //inorder traversal
 */
class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var isSymmetric = function(root) {
    checkMirrorTree(root);
    return verifyMirror();
};
const finalArray = [];

function checkMirrorTree(node) {
    if(node == null) {
        return;
    }
    checkMirrorTree(node.left);
    finalArray.push(node.val);
    checkMirrorTree(node.right);
}

function verifyMirror(){
    if(finalArray.length === 0 || finalArray.length ===1) {
        return true;
    }
    let i = 0, j = finalArray.length-1;
    while(i<j) {
        if(finalArray[i] != finalArray[j]) {
            return false;
        }
        i++; j--;
    }
    return true;
}

const pc = new Node(1);
pc.left = new Node(2);
pc.left.right = new Node(3);
pc.right = new Node(2);
pc.right = new Node(3);
const nd = new Node(1);
nd.left = new Node(2);
nd.left.left = new Node(3);
nd.left.right = new Node(4);
nd.right = new Node(2);
nd.right.left = new Node(4);
nd.right.right = new Node(3);

console.log(isSymmetric(pc));