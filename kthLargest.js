/**
 * implementation of min
 */


class BinaryHeap {

    constructor(type) {
        this.type = type;
        this.data = [];
    }
    getParent(index) {
        const pi = Math.floor((index - 1) / 2);
        if (pi < 0) {
            return 0;
        } else {
            return pi;
        }

    }

    getLeftChild(index) {
        return (2 * index) + 1;
    }

    getRightChild(index) {
        return (2 * index) + 2;
    }

    insert(dat) {

        this.data.push(dat);
        if (this.data.length > 1) {
            if (this.type === 'MIN') {
                this.minHeapify(this.data.length - 1, dat);
            } else {
                this.maxHeapify(this.data.length - 1, dat);
            }
        }

    }
    minHeapify(index, dt) {
        const parentIndex = this.getParent(index);
        if (this.data[parentIndex] > dt) {
            this.swapData(index, parentIndex);
            this.minHeapify(parentIndex, dt);
        }

    }

    maxHeapify(index, dt) {
        const parentIndex = this.getParent(index);
        if (this.data[parentIndex] < dt) {
            this.swapData(index, parentIndex);
            this.maxHeapify(parentIndex, dt);
        }
    }

    swapData(indexa, indexb) {
        const temp = this.data[indexa];
        this.data[indexa] = this.data[indexb];
        this.data[indexb] = temp;
    }

    getMax() {
        let temp = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        if (this.type === 'MIN') {

        } else {
            this.bubbleDown(0);
        }
        return temp;
    }

    bubbleDown(index) {
        const lgth = this.data.length - 1;
        if (index > lgth) {
            return;
        }
        const elmtToRmv = this.findMaxChild(index);
        if(this.data[index] < this.data[elmtToRmv]) {
            const temp = this.data[elmtToRmv];
            this.data[elmtToRmv] = this.data[index];
            this.data[index] = temp
        }
        this.bubbleDown(elmtToRmv);
    }

    findMaxChild(index) {
        const leftChild = this.getLeftChild(index);
        const rightChild = this.getRightChild(index);
        if(rightChild > this.data.length-1) {
            return leftChild;
        }
        if(this.data[leftChild] > this.data[rightChild]){
            return leftChild;
        }else {
            return rightChild;
        }

    }


}

/*
const maxh = new BinaryHeap('MAX');
maxh.insert(5);
maxh.insert(9); maxh.insert(10);
console.log(maxh.data);
console.log(maxh.getMax());
console.log(maxh.data); */


let tempData = [3,2,3,1,2,4,5,5,6];
const maxH = new BinaryHeap('MAX');
for(let i=0; i<tempData.length; i++) {
    maxH.insert(tempData[i]);
}

console.log(maxH.data);
let k = 9;
for(let i = 0; i<k-1; i++) {
    maxH.getMax();
    console.log(maxH.data);
}
console.log(maxH.getMax());