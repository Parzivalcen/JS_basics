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


const depthFirstNR = (node, target) => {
  if(node === null) return [];
  const values = [];
  const stack = [ node ];
  
  while(stack.length > 0){
    const current = stack.pop();
    if(current.val === target) return console.log('found', current.val)
    values.push(current.val);
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  console.log(values) 
}

depthFirstNR(a, 'd');

const breathFirst = (root, target) =>{
  if(root === null) return [];
  
  const queue = [root]
  while(queue.length > 0){
    const current = queue.shift();
    if(current.val === target) return true;
    console.log(current.val);
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  return false
}
console.log(breathFirst(a, 'v'));