
// Asked by Apple

class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Time: O(n) || Space: O(n)
function zigzagTraverse(root) {
    if(!root) return [];

    var ans = [];
    let next = [];
    let cur = [];
    let isLTR = true;

    cur.push(root);
    idx = 0;
    ans[idx] = [];
    while(cur.length != 0) {
        let curNode = cur.pop();
        ans[idx].push(curNode.val);
        if(isLTR) {
            if(curNode.left)
                next.push(curNode.left);
            if(curNode.right)
                next.push(curNode.right);
        }
        else {
            if(curNode.right)
                next.push(curNode.right);
            if(curNode.left)
                next.push(curNode.left);
        }

        if(cur.length <= 0) {
            cur = next;
            next = [];
            isLTR = !isLTR;
            idx+=1;
            if(cur.length)
                ans[idx] = [];
        }
    }
    return ans;
}


let x2 = new Node(2, new Node(4, new Node(8), new Node(9)), new Node(5, new Node(10), new Node(11)));
let x3 = new Node(3, new Node(6, new Node(12)), new Node(7, null, new Node(13)));
let x = new Node(1, x2, x3);
console.log(zigzagTraverse(x));