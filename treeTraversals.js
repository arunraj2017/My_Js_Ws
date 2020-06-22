class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class BST {
    
    constructor(data) {
        this.head = new Node(data);
    }

    insert(data) {
        this.insertNode(this.head, new Node(data))
    }

    insertNode(head ,node) {
        if(node.data > head.data) {
            if(!head.right){
                head.right = node;
                return;
            }else{
                this.insertNode(head.right, node);
            }
        }else{
            if(!head.left) {
                head.left = node;
                return;
            }else {
                this.insertNode(head.left, node);
            }
        }
    }

    inorder(){
       this.doInorder(this.head);
    }

    doInorder(node) {
        if(!node) {
            return
        }

        this.doInorder(node.left);
        console.log(node.data);
        this.doInorder(node.right);

    }
}

//inorder (left, root, right)
//preorder (root, left, right)
//postorder (left, right, root)


const bst = new BST(100);
bst.insert(101);
bst.insert(99);
bst.insert(102)
bst.inorder();

export {BST}