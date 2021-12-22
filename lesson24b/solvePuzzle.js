/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function(grid) {
    let result = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let cellPerimeter = 4;
            if (grid[i][j] === 1) {
                if (i < (grid.length - 1) && grid[i + 1][j] === 1) {
                    cellPerimeter -= 1;
                }

                if (i > 0 && grid[i - 1][j] === 1) {
                    cellPerimeter -= 1;
                }

                if (j < (grid[j].length - 1) && grid[i][j + 1] === 1) {
                    cellPerimeter -= 1;
                }

                if (j > 0 && grid[i][j - 1] === 1) {
                    cellPerimeter -= 1;
                }

                result += cellPerimeter;
            }
        }
    }

    return result;
};

export { islandPerimeter };
