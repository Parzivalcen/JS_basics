class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right= null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;              
a.right = c;         
b.left = d;        
b.right = e;
c.right = f;


const depthFirst = (node, target) => {
  if(node === null) return false;
  if(node.val === target) return console.log(true);

  return depthFirst(node.left, target) || depthFirst(node.right, target);
}
console.log(depthFirst(a, 'l'))
depthFirst(a, 'd');

// base case, if node is null return [];
// base case, if node.val === targer, return true
// function(node.rigth, target) || function (node.left, target)
