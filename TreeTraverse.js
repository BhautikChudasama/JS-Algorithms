
class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Time: O(n) | Space: O(1)
function BFS(root) {
  if(root == null)
    return root;
  
  let q = [];
  let finalArray = [];

  q.push(root);

  while(q.length > 0) {
    let curElement = q.shift();

    finalArray.push(curElement.val);

    if(curElement.left != null) 
      q.push(curElement.left);
  
    if(curElement.right != null) 
      q.push(curElement.right); 
  }

  return finalArray;
}

// Time: O(n) | Space: O(n)
function DFS(root, finalArray) {
  if(root == null)
    return root;
  
  finalArray.push(root.val);

  if(root.left != null)
    DFS(root.left, finalArray);
  if(root.right != null)
    DFS(root.right, finalArray);

  return finalArray;
}

let t2 = new Node(2, new Node(4), new Node(5))
let t3 = new Node(3, new Node(6), new Node(7));
let t = new Node(1, t2, t3);

console.log(BFS(t));
console.log(DFS(t, []));

