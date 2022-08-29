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

// NON Recursive acces to the tree 
const depthFirstNR = (root) => {
  if(root === null) return [];
  const arrValues = [];
  const stack = [root];
  while(stack.length > 0){
    const current = stack.pop();
    arrValues.push(current.val);
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  
  console.log(arrValues);
}

depthFirstNR(a);


// if root is empty, return arr []
// create a stack with an array
// stack = root
// while the stack is not empty
// pop the last value and use it as current
// current gets added to arr of values
// if current has a rigth child, it gets added to the stack
// if current has a left child, it gets added to the stack aswell

// return arr of values when stack is empty. 


//      a
//   /     \
//  b        c
// /  \        \
// d   e         f



