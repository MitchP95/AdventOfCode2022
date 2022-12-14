import * as fs from 'fs'
import { STACKS } from './initialStacks';
import Instruction from './instruction'

function rearrangeStacks(stacks: string[][], instructions: Instruction[]): string[][] {
    for (let i = 0; i < instructions.length; i++) {
        stacks = instructions[i].enact(stacks);
    }

    return stacks;
}

function rearrangeStacks9001(stacks: string[][], instructions: Instruction[]): string[][] {
    for (let i = 0; i < instructions.length; i++) {
        stacks = instructions[i].enact9001(stacks);
    }

    return stacks;
}

let instructionText: string = fs.readFileSync('./assets/d05/d05-instructions.txt', 'utf-8');
let individualInstructionTest: string[] = instructionText.split(/\r?\n/);

let instructions: Instruction[] = [];
for (let i = 0; i < individualInstructionTest.length; i++) {
    instructions.push(new Instruction(individualInstructionTest[i]));
}

let stacks: string[][] = STACKS;
stacks = rearrangeStacks9001(stacks, instructions);

let topStacks = ''
for (let i = 0; i < stacks.length; i++) {
    topStacks += stacks[i][stacks[i].length - 1];
}

console.log(topStacks);