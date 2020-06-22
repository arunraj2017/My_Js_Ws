class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}

function validateBst(node) {
    return validateTree(node, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function validateTree(node, min, max) {
    if(!node) {
        return true;
    }

    if(node.value >max ||  node.value < min) {
        return false;
    }

    return(validateTree(node.left, min, node.value) && validateTree(node.right, node.value, min));

}

const bst = new Node(3);
bst.left = new Node(2);
bst.left.left = new Node(1);
bst.left.right = new Node(4);
bst.right = new Node(5);
//bst.right.left = new Node(16);
//bst.right.right = new Node(32);

console.log(validateBst(bst));
