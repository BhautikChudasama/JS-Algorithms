

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// For non-negative number
// Time: O(n) | Space: O(n);
function validateBST(root) {
  if(!root) return true;

  let q = [];
  q.push({node: root, parent: null, isLeft: false, isRight: false, min: -9999, max: 9999});

  while(q.length > 0) {
  
    let curNode = q.shift();
 
    if(curNode.parent != null) {
      if(curNode.isLeft) {
        if(curNode.node.val < curNode.parent.val) {
          if(curNode.node.val > curNode.min && curNode.node.val <= curNode.max) {
            if(curNode.node.left)
              q.push({node: curNode.node.left, parent: curNode.node, isLeft: true, isRight: false, min: curNode.min, max: curNode.node.val-1});
            if(curNode.node.right)
              q.push({node: curNode.node.right, parent: curNode.node, isLeft: false, isRight: true, min: curNode.node.val, max: curNode.max});
          }
          else return false;
        }
        else return false;
      }
      else if(curNode.isRight) {
        if(curNode.node.val >= curNode.parent.val) {
          if(curNode.node.val >= curNode.min && curNode.node.val <= curNode.max) {
            if(curNode.node.left)
              q.push({node: curNode.node.left, parent: curNode.node, isLeft: true, isRight: false, min: curNode.min, max: curNode.node.val-1});
            if(curNode.node.right)
              q.push({node: curNode.node.right, parent: curNode.node, isLeft: false, isRight: true, min: curNode.node.val, max: curNode.max});
          }
          else return false;
        }
        else return false;
      }
      else {
        return false;
      }
    }
    else {
      // Parent is null 
      if(curNode.node.left) 
         q.push({node: curNode.node.left, parent: curNode.node, isLeft: true, isRight: false, min: -9999, max: curNode.node.val-1});
         
      if(curNode.node.right)
        q.push({node: curNode.node.right, parent: curNode.node, isLeft: false, isRight: true, min: curNode.node.val, max: 9999});
    }
  }
  return true;
}



let x = new Node(5, new Node(3, new Node(1), new Node(11)), new Node(9, new Node(8), new Node(10)));

console.log(validateBST());


