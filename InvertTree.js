

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Time: O(n) | Space: O(1)
function invertBtree(root) {
  if (!root) return;

  let q = [];
  q.push(root);

  while(q.length > 0) {
    let cur = q.shift();
    [cur.left, cur.right] = [cur.right, cur.left];

    if(cur.left)
      q.push(cur.left);
    if(cur.right)
      q.push(cur.right);
  }

  return root;
}


function print(root) {
  if(root) console.log(root.val);
  if(root.left) print(root.left);
  if(root.right) print(root.right);
}


let x1 = new Node(2, new Node(4), new Node(5));
let x2 = new Node(3, null, new Node(6));
let x = new Node(1, x1, x2);

let invertedTree = invertBtree(x);

print(invertedTree);
