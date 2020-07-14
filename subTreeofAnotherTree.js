/**
 * 
 * check given tree is a subtree of another
 * 
 * find same node, then pass it to a function that compares all child nodes
 */

class Node {
    constructor(data) {
      this.data = data
      this.left = null
      this.right = null
    }
  }
  
function checkForSubtrees(root1, root2) {
    if(root1 == null || root2 == null) {
        return false;
    }
    if(root1.data === root2.data) {
        return compareTrees(root1, root2);
       
    } else {
        return checkForSubtrees(root1.left, root2) || checkForSubtrees(root1.right, root2);
    }
    
}

function compareTrees(root1, root2) {
    if(root1 == null || root2 == null) {
       return root1== null && root2==null;
    }
    if(root1.data !== root2.data) {
        return false;
    } 
    return  compareTrees(root1.left, root2.left) && compareTrees(root1.right, root2.right);
    
}

const nd = new Node(3);
nd.left = new Node(4);
nd.right = new Node(5);
nd.left.left = new Node(1);
nd.left.right = new Node(2);
nd.left.right.left = new Node(0);

const ns = new Node(4);
ns.left = new Node(1);
ns.right = new Node(2);

console.log(checkForSubtrees(nd, ns));