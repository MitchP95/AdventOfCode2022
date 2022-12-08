import * as fs from 'fs'

let treeRows: string[] = (fs.readFileSync('./assets/d8-input.txt', 'utf-8')).split(/\r?\n/);
let treeGrid: string[][] = [];

for (let i = 0; i < treeRows.length; i++) {
    treeGrid.push(treeRows[i].split(""));
}

console.log(treeGrid);

// Start with O(n^2) time solutions
let visibleTreeCount: number = 0;

// Get perimeter count
visibleTreeCount += treeRows.length * 2;
visibleTreeCount += (treeRows[0].length - 2) * 2;

// Get inner count
for (let i = 1; i < treeRows.length - 1; i++) {
    for (let j = 1; j < treeRows[0].length - 1; j++) {
        // if (areSurroundingElementsLarger)
    }
}