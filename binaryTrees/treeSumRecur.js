class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right= null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
depthFirst(a);
console.log(depthFirst(a));


function depthFirst(node){
  if(node === null) return 0;
  return node.val + depthFirst(node.left) + depthFirst(node.right);
}

// base case, if node is null, return 0
// return node.val + depthFirst(node.left) + depthFirst(node.right);