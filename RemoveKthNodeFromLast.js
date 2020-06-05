
class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

// Time: O(n) | Space: O(n)
function removeKthNode(head, n) {
    let dict = {};

    let temp = head;
    let idx = 0;

    while(temp != null) {
      dict[idx] = temp;
      temp = temp.next;
      idx+=1;
    }

    let linkedListLen = Object.keys(dict).length;

    let targetNode = Math.abs(linkedListLen - n);
  
    // Head node
    if(targetNode == 0) 
      head = head.next;
    
    // Tail node
    else if(targetNode == n) 
      dict[linkedListLen-1].next = null;
    
    else {
      prevNode = dict[targetNode-1];
      nextNode = dict[targetNode+1];
      prevNode.next = nextNode;
    }

    return head;

}

let head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

let linkedList = removeKthNode(head, 5);

temp = linkedList;

while(temp != null) {
  console.log(temp.val);
  temp = temp.next;
}


