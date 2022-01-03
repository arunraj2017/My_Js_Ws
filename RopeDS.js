
/** 
 * https://www.sanfoundry.com/java-program-implement-rope/
*/
class Node{

    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
        this.weight = data.length;
    }
}


class Rope {

    constructor(){
        this.root = new Node('');   
    }

    concat(str) {

        let newRopeNode = new Node(str);
        let newHead = new Node('');
        newHead.left = this.root;
        newHead.right = newRopeNode;
        newHead.weight = newHead.left.weight;
        if(newHead.left.right) {
            newHead.weight += newHead.left.right.weight;
        }
        this.root = newHead;
    }

    findAtIndex(i) {

        if(i<0) {
            return -1;
        }
        let tempNode = this.root;
        while(tempNode) {
            if(i < tempNode.weight && tempNode.left) {
                tempNode = tempNode.left
            }else if(i > tempNode.weight && tempNode.right){
                i -= tempNode.weight;
                tempNode = tempNode.right;
            }else{
                break;
            }
        }

        return tempNode.data[i];

    }


}


let rhead = new Rope();
rhead.concat('hello')
rhead.concat('my')
console.log(rhead.findAtIndex(3))
