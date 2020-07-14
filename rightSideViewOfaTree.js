/*
     3
4          5


prints 3,5
*/

class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const levelMap = {};
function getRightSideView(root, level) {
    if(root == null) {
        return;
    }

    levelMap[level] = root.val;
    if(root.left) {
        getRightSideView(root.left, level+1);
    }
    if(root.right) {
        getRightSideView(root.right, level+1);
    }
}

const rt = new Node(10);
rt.left = new Node(5);
rt.right = new Node(11);
rt.left.left = new Node(3);
rt.left.right = new Node(9);
rt.left.left.right = new Node(20);
rt.left.left.right.right = new Node(21);
rt.left.left.right.right.right =new Node(22);
rt.left.left.right.right.right.right = new Node(23);

getRightSideView(rt, 0);
console.log(levelMap);