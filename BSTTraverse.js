

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Time: O(n) | Space: O(d) // call stack 
function inOrderBST(root) {
  if(!root) return [];
  let final = [];
  inHelper(root, final);
  return final;
}

function inHelper(tree, final) {
  if(tree.left) inHelper(tree.left, final);
  if(tree) final.push(tree.val);
  if(tree.right) inHelper(tree.right, final);
}

function preOrderBST(root) {
  if(!root) return [];
  let final = [];
  preHelper(root, final);
  return final;
}

function preHelper(tree, final) {
  if(tree) final.push(tree.val);
  if(tree.left) preHelper(tree.left, final);
  if(tree.right) preHelper(tree.right, final);
}

function postOrderBST(root) {
  if(!root) return [];
  let final = [];
  postHelper(root, final);
  return final;
}

function postHelper(tree, final) {
  if(tree.left) postHelper(tree.left, final);
  if(tree.right) postHelper(tree.right, final);
  if(tree) final.push(tree.val);
}

let x = new Node(1, null, new Node(2, new Node(3)));

console.log(inOrderBST(x, []));
console.log(preOrderBST(x, []));
console.log(postOrderBST(x, []));

