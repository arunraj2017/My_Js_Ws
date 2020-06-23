/**
 * 
 * Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. 
Could you implement both?
 */



class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 1->2->3->4
function makeReverseRec(node) {
    if (!node.next) {
        return node;
    }
    let p = makeReverseRec(node.next);
    node.next.next = node;
    node.next = null;
    return p;

}

function printReverseIter(node) {

}

function printLinkedList(node) {

    while (node != null) {
        console.log(`${node.data}`);
        node = node.next;
    }
}


const nd = new Node(1);
nd.next = new Node(2);
nd.next.next = new Node(3);
nd.next.next.next = new Node(4);

let pp =makeReverseRec(nd);
printLinkedList(pp);