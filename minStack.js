/**
 * 
Design a stack that supports push, pop, top,
and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

Methods pop, top and getMin operations will always be called on non-empty stacks.


solution:
=============
add another stack that keep track of current min element


 */

 class MinStack {
    
     constructor() {
         this.head = -1;
         this.stack = [];
         this.minstack = [];
     }

     push(data) {
         if(this.stack.length === 0 && this.minstack.length===0) {
             this.stack.push(data);
             this.minstack.push(data);
             
         } else {
            this.stack.push(data);
            this.minstack.push(Math.min(this.minstack[this.minstack.length-1], data));
         }
     }

     pop() {
         this.minstack.pop();
         this.stack.pop();
     }

     top() {
        return this.stack[this.stack.length-1];
     }

     getMin() {
        return this.minstack[this.minstack.length-1];
     }
 }

 const stk = new MinStack();
 stk.push(-2);
 stk.push(0);
 stk.push(-3);
 console.log(stk.getMin());
 stk.pop();
 console.log(stk.top());
 console.log(stk.getMin());


