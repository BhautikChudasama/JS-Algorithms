

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// For non-negative number
// Time: O(n) | Space: O(Depth) beacuse max call stack;
function validateBST(root) {
  return helperBST(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

/*
  (1, -99, 99)


*/


function helperBST(tree, min, max) {
  if(!tree) return true;
  console.log(min, max);
  if (tree.val <= min || tree.val > max) {
    return false;
  }
  
  let left = helperBST(tree.left, min, tree.val-1);
   
  let right = helperBST(tree.right, tree.val, max);

  if(left && right)
    return true;
    
  return false;
}


let x = new Node(1, null, new Node(1));

console.log(validateBST(x));


