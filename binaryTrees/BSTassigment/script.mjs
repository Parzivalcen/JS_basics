import { Node, Tree } from "./BST.mjs";

const arr  = randomNumArray(10);
console.log(arr);
const tree = new Tree(arr);
tree.prettyPrint();
console.log(tree.isBalanced());
console.log(
  'In order: ', tree.InOrder(),
  'Pre order: ', tree.preOrder(),
  'Post order: ', tree.postOrder()
  );
  // Unbalance Tree
  let n = 0;
while(n <= 100){
  n++
  tree.insert(Math.floor(Math.random() * 100));
}
console.log('After adding > 100 nodes, is the tree balanced?', tree.isBalanced());
if(!tree.isBalanced()){
  tree.rebalance()
}
console.log('Tree has been rebalanced?', tree.isBalanced());
console.log(
  'In order: ', tree.InOrder(),
  'Pre order: ', tree.preOrder(),
  'Post order: ', tree.postOrder()
  )





function randomNumArray(length){
  const arr = [];
  while(arr.length < length){
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}
