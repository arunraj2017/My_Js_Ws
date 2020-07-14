/*
Moving Average from Data Stream
Given a stream of integers and a window size,
 calculate the moving average of all integers in the sliding window.

*/

class MovingAverage{

    constructor(size) {
        this.size = size;
        this.data = [];
        this.sum = 0;
    }

    next(val) {
        //write function here
        if(this.data.length==this.size) {
           let preVal =  this.data.shift()
           this.data.push(val);
           this.sum -= preVal;
           
        }else {
            this.data.push(val);
        }
        this.sum += val;
        return this.sum/this.data.length;

    }
}

const rm = new MovingAverage(3);
console.log(rm.next(1));
console.log(rm.next(10));
console.log(rm.next(3));
console.log(rm.next(5));
