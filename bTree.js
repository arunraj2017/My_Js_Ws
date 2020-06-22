class Node {
    constructor(data) {
      this.data = data
      this.left = null
      this.right = null
    }
  }
  
  class BTree {
    constructor(data) {
      this.head = new Node(data)
    }
  
    add(data) {
      let node = new Node(data)
      this.addNode(this.head, node)
    }
  
    addNode(parent, dataNode) {
      if (dataNode.data > parent.data) {
        if (!parent.right) {
          parent.right = dataNode
          return
        } else {
          this.addNode(parent.right, dataNode);
        }
      } else {
        if (!parent.left) {
          parent.left = dataNode
          return
        } else {
          this.addNode(parent.left, dataNode);
        }
      }
    }
  }
  
  const btree = new BTree(100)
  btree.add(40)
  btree.add(30)
  console.log(btree)
  