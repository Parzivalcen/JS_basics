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

let arr = [];
console.log( printValues(a));
console.log(arr);

function printValues(node){
  if(node===null)return[];
  const righValues = printValues(node.right);
  const leftValues = printValues(node.left);
  return [...node.val, ...leftValues, ...righValues]
}

// base case, if node === null, return [];
// const righValues = function(node.right);
// const leftValues = function(node.left);
// return [...node.val, ...righValues, ...leftValues]