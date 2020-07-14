
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const queue = [];
const viewMap = {};
let leftMax = Number.MAX_SAFE_INTEGER;
let rightMax = Number.MIN_SAFE_INTEGER;
function traverseTopView(root, view) {
    if (root == null) {
        return;
    }


    if (!(view in viewMap)) {
        viewMap[view] = root;
    }
    if (view < leftMax) {
        leftMax = view;
    }
    if (root.left != null) {
        traverseTopView(root.left, view - 1);
    }
    if (view > rightMax) {
        rightMax = view;
    }
    if (root.right != null) {
        traverseTopView(root.right, view + 1);
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
traverseTopView(rt, 0);
console.log(viewMap);
for(let i=leftMax; i<=rightMax;i++){
    console.log(viewMap[i].value);
}

