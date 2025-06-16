
// **Number of Islands (DFS/BFS):**
//     * Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.
//     * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];

const directions = [
    [0,1],
    [1,0],
    [0,-1],
    [-1,0]
];

  function countIslands(grid) {
    const visited = new Set();

    function explore(grid, pos) {
        if (pos[0] < 0 || pos[0] >= grid.length || pos[1] < 0 || pos[1] >= grid[0].length) return false;
        if (grid[pos[0]][pos[1]] === '0') return false;
        if (visited.has(pos.join())) return false;
        visited.add(pos.join());
        console.log(pos.join())
        for (const [x,y] of directions) {
            explore( grid, [pos[0] + x, pos[1] + y]);
        }

        return true;
    }

    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (explore(grid, [i,j])) {
                count++;
            }
        }
    }

    return count;
  }

  console.log("Grid:", grid);
  console.log("Count:", countIslands(grid))