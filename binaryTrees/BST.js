function createNode(val){
  return {
    value: val,
    left: null,
    right: null,
  } 
}

function createTree(root){
  return {
    treeRoot: root
  }
}

function sortedArrayToBST (arr, start, end) {
  if(start > end) return
  let mid = parseInt((start + end)/2);
  let node = createNode(arr[mid]);

  node.left = sortedArrayToBST(arr, 0, mid-1);
  node.right = sortedArrayToBST(arr, mid+1, end);

  return node;

}

let data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
data.sort((a,b)=>a-b);
data = [... new Set(data)];
const dataStart = data[0];
const dataEnd = data.at(-1);
const end = data.length-1;
const binaryTree = sortedArrayToBST(data, 0, end)

console.log(binaryTree);