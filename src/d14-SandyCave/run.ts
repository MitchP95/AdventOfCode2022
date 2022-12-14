import * as fs from 'fs'
import Position from '../d09-RopeBridge/position';
import RockyGrid2D from './rockyGrid2D';
import RockyGrid2DWithFloor from './rockyGrid2DwithFloor';

// let rockPositionText: string[] = (fs.readFileSync('./assets/d14/d14-sample.txt', 'utf-8')).split(/\r?\n/);
let rockPositionText: string[] = (fs.readFileSync('./assets/d14-input.txt', 'utf-8')).split(/\r?\n/);

let rockPositions: Position[][] = [];
rockPositionText.forEach(line => {
    let elements: string[] = line.split('->');
    let positionGroup: Position[] = [];

    elements.forEach(element => {
        let coords = element.split(',');
        positionGroup.push(new Position(parseInt(coords[0]), parseInt(coords[1])));
    })

    rockPositions.push(positionGroup);
})

const grid: RockyGrid2D = new RockyGrid2D(rockPositions);
grid.dropSandUntilItGoesOffGrid(500);
grid.printGrid();
console.log(`Number of sand grains dropped: ${grid.getSandCount()}`);

const gridWithFloor: RockyGrid2DWithFloor = new RockyGrid2DWithFloor(rockPositions);
gridWithFloor.dropSandUntilItClogsEntryPoint(500);
gridWithFloor.printGrid();
gridWithFloor.getSandCount();