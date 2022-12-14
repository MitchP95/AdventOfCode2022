import { areSurroundingElementsEvenOrLarger as areSurroundingElementsEqualOrLarger, getScenicScore } from "../../src/d08-TreeHouse/2dArrayUtilities";

describe('2D Array Utilities', () => {
    let grid: number[][] = [
        [3, 0, 3, 7, 3],
        [2, 5, 5, 1, 2],
        [6, 5, 3, 3, 2],
        [3, 3, 5, 4, 9],
        [3, 5, 3, 9, 0]
    ];
    
    beforeEach(() => {
        
    })
    
    test('Surrounding elements larger, outside edge row always false', ()=> {
        let expectedLargerSurrounding: boolean = false;

        let largerSurrounding: boolean = areSurroundingElementsEqualOrLarger(grid, 0, 1);

        expect(largerSurrounding).toEqual(expectedLargerSurrounding);
    })
    
    test('Surrounding elements larger, outside edge col always false', ()=> {
        let expectedLargerSurrounding: boolean = false;

        let largerSurrounding: boolean = areSurroundingElementsEqualOrLarger(grid, 0, 1);

        expect(largerSurrounding).toEqual(expectedLargerSurrounding);
    })

    test('Surrounding elements larger, inside uncovered', ()=> {
        let expectedLargerSurrounding: boolean = false;

        let largerSurrounding: boolean = areSurroundingElementsEqualOrLarger(grid, 2, 1);

        expect(largerSurrounding).toEqual(expectedLargerSurrounding);
    })

    test('Surrounding elements larger, inside covered 1', ()=> {
        let expectedLargerSurrounding: boolean = true;

        let largerSurrounding: boolean = areSurroundingElementsEqualOrLarger(grid, 2, 2);

        expect(largerSurrounding).toEqual(expectedLargerSurrounding);
    })

    test('Surrounding elements larger, inside covered 2', ()=> {
        let expectedLargerSurrounding: boolean = true;

        let largerSurrounding: boolean = areSurroundingElementsEqualOrLarger(grid, 3, 3);

        expect(largerSurrounding).toEqual(expectedLargerSurrounding);
    })

    test('Scenic score, inside covered 1', ()=> {
        let expectedScore: number = 4;

        let scenicScore: number = getScenicScore(grid, 1, 2);

        expect(scenicScore).toEqual(expectedScore);
    })

    test('Scenic score, inside covered 2', ()=> {
        let expectedScore: number = 8;

        let scenicScore: number = getScenicScore(grid, 3, 2);

        expect(scenicScore).toEqual(expectedScore);
    })
})