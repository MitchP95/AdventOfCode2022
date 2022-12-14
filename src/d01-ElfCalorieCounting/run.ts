import * as fs from 'fs'
import Elf from './elf';
import ElfCollection from './elfCollection';
import SnackContainer from './interfaces/snackContainer';
import SnackLedgerInterpreter from './snackLedgerInterpreter'

let snackLedger: string = fs.readFileSync('./assets/d01-input.txt', 'utf-8');

let interpreter: SnackLedgerInterpreter = new SnackLedgerInterpreter();
let snackLists: number[][] = interpreter.getCalorieLists(snackLedger);

// Make Elves
let elves: SnackContainer[] = [];
for (let i = 0; i < snackLists.length; i++) {
    elves.push(new Elf(snackLists[i]));
}

console.log('Number of elves: ' + elves.length);
let elfCollection: ElfCollection = new ElfCollection(elves as Elf[]);

// Find highest calorie count
let numElvesForTotal: number = 3;
let highestCalories = elfCollection.getHighestCalorieTotal(numElvesForTotal);

console.log('Calorie count: ' + highestCalories);


