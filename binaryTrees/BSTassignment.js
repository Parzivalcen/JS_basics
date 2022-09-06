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
  insert(value, root = this.root){
    if(root === null) return root = new Node(value);

    if(value > root.data) root.right = this.insert(value, root.right);
    if(value < root.data) root.left = this.insert(value, root.left);

    return root;
  }

  delete(value, root = this.root){
    if(root === null) return root;

    if(value > root.data) root.right = this.delete(value, root.right);
    else if(value < root.data) root.left = this.delete(value, root.left);

    //if root is the same as value
    else{
      if(root.right === null) return root.left;
      else if (root.left === null) return root.right;

      root.data = this.minValue(root.right);
      root.right = this.delete(root.data, root.right);
    }

    return root;
  }

  minValue(root = this.root){
    let node = root;
    let tmp = node.data;
    while(node.left !== null){
      tmp = node.left.data;
      node = node.left;
    }
    return tmp;
  }
  find(value, root = this.root){
    if(root === null) return root;
    if(root.data===value) return root;
    return this.find(value, root.left) || this.find(value, root.right);
  }
  levelOrder(root = this.root){
    if(root === null) return root;
    const queue = [root];
    const treeData = [];
    while(queue.length > 0){
      const current = queue.shift();
      treeData.push(current.data);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return treeData;

  }
  // In Order, Pre Order and Post Order Traversals
  InOrder(root = this.root, values = []){
    if(root === null) return [];
    this.InOrder(root.left, values);
    values.push(root.data);
    this.InOrder(root.right, values);
    return values;
  }
  preOrder(root = this.root, values = []){
    if(root === null) return [];
    values.push(root.data);
    this.preOrder(root.left, values);
    this.preOrder(root.right, values);
    return values;
  }
  postOrder(root = this.root, values = []){
    if (root === null) return [];

    this.postOrder(root.left, values);
    this.postOrder(root.right, values);
    values.push(root.data);
    return values;
  }
  height(root = this.root){
    if(root === null) return -1;
    else{
      let leftHeight = this.height(root.left);
      let rightHeight = this.height(root.right);

      if(leftHeight > rightHeight) return leftHeight+1;
      else return rightHeight+1;
    }
    
  }
  depth(node = this.root){
    if(node === null) return -1;
    else{
      let leftHeight = this.height(node.left);
      let rightHeight = this.height(node.right);

      if(leftHeight > rightHeight) return leftHeight+1;
      else return rightHeight+1;
    }
  }

  isBalanced(root = this.root){
    const depthRight = this.depth(root.right);
    const depthLeft = this.depth(root.left)
    const balanceOp = Math.abs(depthRight - depthLeft);
    if(balanceOp === 1 || balanceOp === 0) return true;
    return false;
  }
  rebalance(){
    const values = this.InOrder(this.root);
    return this.root = this.buildTree(values, 0, values.length - 1);
  }
}
let data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const dataTree = new Tree(data);

dataTree.insert(10);
dataTree.insert(15);
console.log(dataTree.minValue())

depthFirstValues(dataTree.root);
prettyPrint(dataTree.root);

console.log(dataTree.isBalanced())
dataTree.rebalance()
prettyPrint(dataTree.root);
console.log(dataTree.isBalanced())

// prettyPrint(dataTree.root);








// HELPERS

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




