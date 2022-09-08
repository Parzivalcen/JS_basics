class Graph {
  constructor(nOfVertices){
    this.nOfVertices = nOfVertices;
    this.adjList = new Map();
  }

  addVertex(v){
    this.adjList.set(v, []);
  }
  addEdge(v, w){
    this.adjList.get(v).push(w);

    this.adjList.get(w).push(v);
  }
  printGraph(){
    let getKeys = this.adjList.keys();
    for(let i of getKeys){
      let getValues = this.adjList.get(i);
      let conc = '';

      for(let j of getValues){
        conc += j + " ";
      }
      console.log(i + ' -> ' + conc);
    }
  }
  // function to performs BFS
bfs(startingNode){
  // create a visited object
  let visited = {};
  let queue = [];

  // add the starting node to the queue
  visited[startingNode] = true;
  queue.push(startingNode);

  // loop until queue is empty
  while (queue.length > 0) {
      // get the element from the queue
      let getQueueElement = queue.shift();

      // passing the current vertex to callback function
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      let getList = this.adjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (let i in getList) {
          let neigh = getList[i];

          if (!visited[neigh]) {
              visited[neigh] = true;
              queue.push(neigh);
          }
      }
  }
  
}

}

const myGraph = new Graph(5);
const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for(let i = 0; i < vertices.length; i++){
  myGraph.addVertex(vertices[i]);
}

// Add Edges 
myGraph.addEdge('A', 'B')
myGraph.addEdge('A', 'D')
myGraph.addEdge('A', 'E')
myGraph.addEdge('B', 'C')
myGraph.addEdge('C', 'E')
myGraph.addEdge('C', 'F')
myGraph.addEdge('D', 'E')
myGraph.addEdge('E', 'F')
myGraph.printGraph();

console.log(myGraph.nOfVertices);
// console.log(myGraph.addVertex(1));
console.log(myGraph.adjList);
myGraph.bfs('A');