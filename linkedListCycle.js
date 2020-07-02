class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function findLoop(node) {
   let slow = node, fast = node.next;
    while(slow !== fast) {
        if(fast===null || fast.next===null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
   
}

const nd = new Node(10);
nd.next = new Node(9);
nd.next.next = new Node(8);
nd.next.next = new Node(7);
nd.next.next.next = new Node(6);
// nd.next.next.next.next = nd.next.next;
console.log(findLoop(nd));