class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            //Left
            if(!currentNode.left){
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //Right
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            } 
            currentNode = currentNode.right;
          }
        }
      }
    }
    //   9
  //  4     20
  //1  6  15  170
  
  dfs () {
   const fArray = [];
   const queue = [];
   let tempRoot = this.root;
   queue.push(tempRoot);
   while(queue.length > 0) {
     const curentNode = queue.shift();
     fArray.push(curentNode.value);
     if(curentNode.left) {
       queue.push(curentNode.left);
     }
     if(curentNode.right) {
       queue.push(curentNode.right);
     }
   }
  return fArray;
  
  }
  
  dfsRecursive() {
    this.BreadthFirstSearchR([this.root],[]);
  }
 BreadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);
    
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    
    return this.BreadthFirstSearchR(queue, list);
  }
    
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  console.log(tree.dfsRecursive());
  
  
  
  
  
  
  
  