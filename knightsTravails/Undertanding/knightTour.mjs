const N = 8;

function printMatrix(matrix){
  for(let x = 0; x < 8; x++){
    let matrixStr = '';
    for(let y = 0; y < 8; y++){
      matrixStr += matrix[x][y] + ' ';
    }
    console.log(matrixStr);
    
  }

}

function knightMatrix (){
  const matrix = [];
  // populate 8x8 matrix
  // -1 means not visited
  for(let i = 0; i < 8; i++){
    matrix.push(Array());
    for(let j = 0; j<8; j++){
      matrix[i][j]=-1;
    }
  }
  // how a knight can move
  const xMoves = [2, 1, -1, -2, -2, -1, 1, 2];
  const yMoves = [1, 2, 2, 1, -1, -2, -2, -1];

  // initialize night 
  matrix[0][0] = 0;

  if(!knightTraverse(0,0,1,matrix,xMoves, yMoves)){
    console.log('not solution');
    return false;
  }
  printMatrix(matrix);
  return true;
}

// check if move is inside board
function isSafe(x, y, matrix){
  return (x >= 0 && y >= 0 && x < 8 && y < 8 && matrix[x][y] === -1 );
}

function knightTraverse(x, y, movementsCount, matrix, xMoves, yMoves){
  let k, nextX, nextY;

  if(movementsCount === N * N) return true;

  for(k = 0; k < 8; k++){
    nextX = x + xMoves[k];
    nextY = y + yMoves[k];

    if(isSafe(nextX, nextY, matrix)){
      matrix[nextX][nextY] = movementsCount;
      if(knightTraverse(nextX, nextY, movementsCount + 1, matrix, xMoves, yMoves))
        return true;
      else
        matrix[nextX][nextY]=-1;
    }
  }
  return false;
}

console.log(knightMatrix());