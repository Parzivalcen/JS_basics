class Node {
  constructor (val){
    this.data = val;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(arr){
    this.arr = [...new Set(arr)].sort((a, b)=> a-b);
    this.root = this.buildTree(this.arr, 0, this.arr.length-1);
  }

  buildTree(arr, start, end){
    if(start > end) return null;

    const mid = parseInt((start + end)/2);
    const root = new Node(arr[mid]);

    root.left =  this.buildTree(arr, start, mid-1);
    root.right = this.buildTree(arr, mid+1, end);
    return root;
    
  }
}
let data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const dataTree = new Tree(data);

console.log(dataTree.root)
depthFirstValues(dataTree.root);
prettyPrint(dataTree.root);

function depthFirstValues (root){
  if(root === null) return [];
  const arrValues = [];
  const stack = [root];
  while(stack.length > 0){
    const current = stack.pop();
    arrValues.push(current.data);
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  
  console.log('tree', arrValues);
}

function prettyPrint  (node, prefix = '', isLeft = true) {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}




