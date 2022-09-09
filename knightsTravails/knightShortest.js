class cell{
  constructor(x, y, dis, parent){
    this.x = x;
    this.y = y;
    this.dis = dis;
    this.parent = parent;
  }
}

// check if x, y are inside board
function isSafe(x, y){
  return (x >= 1 && x<8 && y>=1 && y < 8)
}

// Minimun n of steps to reach target with BFS
function minSteps(knightPos, targetPos){
  // How can knights move
  const xMoves = [2, 1, -1, -2, -2, -1, 1, 2];
  const yMoves = [1, 2, 2, 1, -1, -2, -2, -1];

  let node = new cell(knightPos[0], knightPos[1], null)
  const queue = [node];

  // create the board
  let currentMove, x, y;
  let visit = new Array(8);
  // if visit[x][y] = 0, that square was not visited
  for(let i = 0; i < 8; i++){
    visit[i] = new Array();
    for(let j = 0; j<8; j++){
      visit[i][j] = 0;
    }
  }
  
  // starting knight position
  // where you are positioning the knight.
  visit[knightPos[0]] [knightPos[1]] = 1;
  
  while(queue.length > 0){
    currentMove = queue.shift();
    
    
    if(currentMove.x === targetPos[0] && currentMove.y === targetPos[1]){
      queue.length = 0;
      console.log(getPath(currentMove));
      return currentMove.dis;
    }
    
    for(let i = 0; i < 8; i++){
      x = currentMove.x + xMoves[i];
      y = currentMove.y + yMoves[i];
      
      if(isSafe(x, y) && visit[x][y] !== 1){
        visit[x][y] = 1;
        const newNode = new cell(x, y, currentMove.dis + 1, currentMove); 
        queue.push(newNode);
      }
    }

    
  }
  return Number.MAX_VALUE;
  // console.log(visit);
  


}

function getPath(node){
  const queue = [node];
  const path = [];
  while(queue.length > 0){
    const current = queue.shift();
    path.unshift([current.x, current.y]);
    if(current.parent) queue.push(current.parent)
  }
  return path;
}

console.log(minSteps([3, 3], [4, 3]));

