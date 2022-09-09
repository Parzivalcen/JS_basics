class Board {
  constructor() {
    this.getBoard = this.#createBoard();
  }
  // private function to create board
  #createBoard() {
    const board = new Array(8);
    for (let i = 0; i < 8; i++) {
      board[i] = [];
      for (let j = 0; j < 8; j++) {
        board[i][j] = 0;
      }
    }
    return board;
  }
}

class KnightPosition {
  constructor(x, y, dis, parent) {
    this.x = x;
    this.y = y;
    this.dis = dis;
    this.parent = parent;
  }
}

const knightMoves = {
  // To check if the move resides inside the board
  knightMoveValid(x, y) {
    return x >= 1 && x < 8 && y >= 0 && y < 8;
  },

  getPath(target) {
    const queue = [target];
    const path = [];
    while (queue.length > 0) {
      const move = queue.shift();
      path.unshift([move.x, move.y]);
      if (move.parent) queue.push(move.parent);
    }
    return path;
  },

  // Minimun n of steps to reach our target position with BFS
  // Takes two arrays as arguments, starting and targer position
  minSteps(knightPos, targetPos) {
    // knight legal moves
    const xMoves = [2, 1, -1, -2, -2, -1, 1, 2];
    const yMoves = [1, 2, 2, 1, -1, -2, -2, -1];

    const node = new KnightPosition(knightPos[0], knightPos[1], null);
    const queue = [node];

    // Initialize Board
    const newBoard = new Board();
    const board = newBoard.getBoard;

    // Initial knight position
    board[knightPos[0]][knightPos[1]] = 1;

    while (queue.length > 0) {
      const currentMove = queue.shift();

      // If target position is reached
      if (currentMove.x === targetPos[0] && currentMove.y === targetPos[1]) {
        // queue is length is 0
        queue.length = 0;
        console.log(
          `You made it in ${currentMove.dis} moves! Here's your path:`
        );
        console.log(this.getPath(currentMove));
        return currentMove;
      }

      let x, y;
      // Reaching Target Position
      for (let i = 0; i < 8; i++) {
        // generate moves
        x = currentMove.x + xMoves[i];
        y = currentMove.y + yMoves[i];

        // check if generated is valid
        if (this.knightMoveValid(x, y) && board[x][y] !== 1) {
          board[x][y] = 1;
          const nextMove = new KnightPosition(
            x,
            y,
            currentMove.dis + 1,
            currentMove
          );
          queue.push(nextMove);
        }
      }
    }
    return 'Input invalid';
  },
};

knightMoves.minSteps([3, 3], [4, 3]);
