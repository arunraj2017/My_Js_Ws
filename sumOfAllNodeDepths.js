/**
 * given a binary tree, return sum of all node depths
 * 
 *                   1
 *                2     3
 *              4   5 6    7
 *            8   9
 * 
 * counter: 4 
 *    [8 9]
 * while i < counter
 *  
 * 
 */


 class Node{
     constructor(value) {
         this.value = value;
         this.left = null;
         this.right = null;
     }
 }

 function countSumOfLevels(head) {
     if(head == null) {
         return 0;
     }

    const queue = [];
    queue.push(head);
    const finalArray = [];

    while(queue.length > 0 ) {
        let counter = queue.length;
        let sum = 0;
    
        while(counter > 0) {
            let currentNode = queue.shift();
            sum+= currentNode.value;
            if(currentNode.left) {
                queue.push(currentNode.left);
            }
            if(currentNode.right) {
                queue.push(currentNode.right);
            }
            counter--;
        }
        finalArray.push(sum);
        

    }
    return finalArray;
   
 }



const nd = new Node(1);
nd.left = new Node(2);
nd.right = new Node(3);
nd.left.left = new Node(4);
nd.left.right = new Node(5);
nd.right.left = new Node(6);
nd.right.right = new Node(7);
nd.left.left.left = new Node(8);
nd.left.left.right = new Node(9);
countSumOfLevels(nd);
