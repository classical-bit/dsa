const graphEdges = [
    ['A', 'C'],
    ['A', 'B'],
    ['B', 'D'],
    ['B', 'E'],
    ['C', 'F'],
    ['C', 'F'],
    ['E', 'G']
];
console.log("Graph Edges",graphEdges);

function createAdjacencyList(edges) {
    const adjList = new Map();

    for (const [u,v] of edges) {
        if (!adjList.has(u)) {
            adjList.set(u, new Set());
        }
        if (!adjList.has(v)) {
            adjList.set(v, new Set());
        }
        
        adjList.get(u).add(v);
        adjList.get(v).add(u);
    }

    return adjList;
}

const graph =  createAdjacencyList(graphEdges);
console.log("Adjacency List:", graph);

function bfs(graph, startingNode) {
    const visited = new Set();
    const queue = [startingNode];
    visited.add(startingNode);

    const traversalPath = [];
    while (queue.length > 0) {
        currentNode = queue.shift();
        const neighbors = graph.get(currentNode);
        traversalPath.push(currentNode)
        if (neighbors) {
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
    return traversalPath;
}

const bfsPath = bfs(graph, 'A')
console.log("BFS\n", bfsPath);

function dfs(graph, startingNode) {
    const visited = new Set();
    const traversalPath = [];
    function exploreDepth(node) {
        if (visited.has(node))
            return;

        visited.add(node);
        traversalPath.push(node);

        const neighbors = graph.get(node) 
        for (const neighbor of neighbors) {
            exploreDepth(neighbor);
        }
    }
    exploreDepth(startingNode);
    return traversalPath;
}

const dfsPath = dfs(graph,'A')
console.log("DFS\n", dfsPath);