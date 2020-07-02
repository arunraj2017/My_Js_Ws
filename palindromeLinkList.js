/**
 * Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
 * 
 */


 /***
  * Solution -> 2 pointer. 1 pointer slow and second one fast (2x)
  * 1. find mid element
  * 2. slow will be the mid element
  * 3. reverse the traced list till first pointer
  * 4. make second pointer slow this time
  * 5. check equal
  */

class Nodee{
      constructor(val) {
          this.val = val;
          this.next = null;
      }
}

var isPalindrome = function(head) {
    if(head == null) {
        return true;
    }
    let sp = head;
    let fp = head;
    while(fp !=null && fp.next !=null) {
        sp = sp.next;
        fp = fp.next.next;
    }
    
    sp = reverse(sp);
    fp = head;
    while(sp!=null && fp!=null) {
        if(sp.val != fp.val) {
            return false;
        }
        sp = sp.next;
        fp = fp.next;
    }
    return true;
    
};

function reverse(head) {
    let prev = null;
    let current = head;
    while(current != null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
}


const node = new Nodee(1)
node.next = new Nodee(2);
node.next.next = new Nodee(2);
node.next.next.next = new Nodee(1);
console.log(isPalindrome(node));