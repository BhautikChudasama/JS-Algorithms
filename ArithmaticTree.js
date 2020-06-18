
// Time: O(N) | Space: O(K) => K means height of tree
class Node {
  constructor(val, left=null, right=null) {
    this.val = val.toString();
    this.left = left;
    this.right = right;
  }
}

/**
 * Aruthmatic Tree
 * @param {Node} root Root of tree
 * @returns {number|string} return number is tree is valid else throw exception.  
 */
function arithmaticTree(root) {
  if(!root) return "Invalid Tree";
  let isOpened = [false];
  let equation = [];
  helper(root, isOpened, equation);
  try {
    return eval(equation.join(""));
  }
  catch(e) {
    return "Invalid tree";
  }
}

function helper(root, isOpened, equation) {
  if((!root.left && !root.right) && !isOpened[0]) {
    equation.push("(");
    equation.push(root.val);
    isOpened[0] = true;
  }
  else if((!root.left && !root.right) && isOpened[0]) {
    equation.push(root.val);
    equation.push(")");
    isOpened[0] = false;
  }
  else {
    helper(root.left, isOpened, equation);
    equation.push(root.val.toString());
    helper(root.right, isOpened, equation);
  }
}

let x1 = new Node("+", new Node(5), new Node(2));
let x2 = new Node("+", new Node(3), new Node(1));
let x = new Node("*", x1, x2);
console.log(arithmaticTree(x));
