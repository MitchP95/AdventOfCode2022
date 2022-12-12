import * as fs from 'fs'
import Heightmap from './heightmap';

let heightmapText: string[] = (fs.readFileSync('./assets/d12/d12-sample.txt', 'utf-8')).split(/\r?\n/);
// let heightmapText: string[] = (fs.readFileSync('./assets/d12-input.txt', 'utf-8')).split(/\r?\n/);
let heightmap: Heightmap = new Heightmap(heightmapText);

heightmap.printGridWithPositions();
heightmap.findShortestPathToGoal();