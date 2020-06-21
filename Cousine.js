
// Asked by Amazon

// Time: O(2N) => O(n) | Space: O(n);

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  } 
}

// Same level + differnet parent 
// Consider each node has unique value;

/**
 * @param {Node} root Any root that has childrean
 * @param {number} n any node value that you want to find cousine
 * @returns {number[]} cousine of n
 * 
 */
function cousine(root, n) {
  if(!root) return null;
  
  let history = [];

  let q = [{root: true, node: root, parent: null, level: 0}]

  history.push({root: true, node: root, parent: null, level: 0});

  let foundAtLevel = null;

  while(q.length > 0) {
    let curNode = q.shift();
    let level = curNode.level;
    
    if(curNode.node.val == n) {
      foundAtLevel = curNode;
    }
    if(curNode.node.left) {
        q.push({root: false, node: curNode.node.left, parent: curNode.node, level: curNode.level+1});
        history.push({root: false, node: curNode.node.left, parent: curNode.node, level: curNode.level+1});
    }
    if(curNode.node.right) {
        q.push({root: false, node: curNode.node.right, parent: curNode.node, level: curNode.level+1});
        history.push({root: false, node: curNode.node.right, parent: curNode.node, level: curNode.level+1});
    }
  }


  var x = history.filter((item, index) => {
    if((item.node.val != foundAtLevel.node.val && item.level == foundAtLevel.level) && item.parent.val != foundAtLevel.parent.val) {
      return item.node.val;
    }
  })

  return x.map((item) => item.node.val);
}

let x1 = new Node(2, new Node(4), new Node(5));
let x2 = new Node(3, null, new Node(6));
let x = new Node(1, x1, x2);
console.log(cousine(x, 4));
