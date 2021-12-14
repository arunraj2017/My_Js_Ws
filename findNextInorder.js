// BST Successor Search
//https://www.geeksforgeeks.org/inorder-succesor-node-binary-tree/
//Find Next Inorder Successor in a binary tree

/**
 * 
 * if node has right find the left most of right
 * 
 * else need to traverse from head to a node where the parent is a left sub tree. return parent
 */

//WRONG SOLUTION


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.head = null;
    }

    add(data) {
        if(this.head==null) {
            this.head = new Node(data);
        } else {
            this.recurAdd(this.head, data);
        }
    }

    recurAdd(node, data) {
       
        if(data < node.data) {
            if(!node.left) {
                node.left = new Node(data);
                return;
            }else{
                this.recurAdd(node.left, data);
            }
         }else {
            if(!node.right) {
                node.right = new Node(data);
                return;
            }else{
                this.recurAdd(node.right, data);
            }
        }
      
    }

    findInorder(input) {
        
        if(!this.head || !input) {
          return null;
        } 

        const currentNode = this.findNode(input, this.head);
        if(currentNode.right) {
            return this.findLeftMost(currentNode.right);
        } else {
            let ancestor = this.head;
            let successor = null;

            while(ancestor.data !== input) {
                if(input < ancestor.data) {
                    successor = ancestor;
                    ancestor = ancestor.left;
                }else {
                    ancestor = ancestor.right;
                }
            }
            return successor

        }


    }

    findNode(data, root) {
        if(root == null) {
            return null;
        }
        if(data === root.data) {
            return root;
        }

        if(data < root.data){
            return this.findNode(data, root.left);
        }else{
            return this.findNode(data, root.right);
        }

    }

    findLeftMost(node) {
        if(node.left!=null) {
            return this.findLeftMost(node.left);
        }else {
            return node;
        }
    }
}

const bst = new BST();
bst.add(20);
bst.add(9);
bst.add(25);
bst.add(5);
bst.add(12);
bst.add(11);
bst.add(14);

console.log(bst.findInorder(9));