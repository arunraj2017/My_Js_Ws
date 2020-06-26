/**
 * 
 * Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

====
solution:
create new head and add each elements
 */


 class Node {
     constructor(dat){
         this.data = dat;
         this.next = null;
     }
 }
 function getSortedLinks(l1, l2) {
     if(!l1 && !l2) {
         return [];
     }
     if(!l1) {
         return l2;
     }
     if(!l2) {
         return l1;
     }

     let dummy = new Node(-1);
     let head =  dummy;

     while(l1 !=null && l2 != null) {
         if(l1.data <= l2.data){
             dummy.next = l1;
             l1 = l1.next;
         }else{
             dummy.next = l2;
             l2 = l2.next;
         }
         dummy = dummy.next;


         if(l1 == null) {
             dummy.next = l2;
         } else if(l2== null) {
             dummy.next = l1;
         }


     }

     return head.next;
     

 }

 function printNodes(head) {
     while(head!=null) {
         console.log(head.data);
         head = head.next;
     }
 }
 const nd1 = new Node(1);
 nd1.next = new Node(2);
 nd1.next.next = new Node(4)

 const nd2 = new Node(1);
 nd2.next = new Node(3);
 nd2.next.next = new Node(4);

 printNodes(getSortedLinks(nd1, nd2));