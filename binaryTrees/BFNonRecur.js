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
const breathFirstNR = (root) => {
  if(root === null) return [];
  const valuesArr = [];
  const queue = [root];

  while(queue.length > 0){
    const current = queue.shift();
    valuesArr.push(current.val);

    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  console.log(valuesArr)
}

breathFirstNR(a);


// if root empty, return []
// create arr to store values
// create a queue with an array

// while the queue is not empty
//  remove the first element of the array, this will be our current value
//  push the removed array to the array values
//  if the current has a left and or rigth node, push it to the queue


//      a
//   /     \
//  b        c
// /  \        \
// d   e         f



