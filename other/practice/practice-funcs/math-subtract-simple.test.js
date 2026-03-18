import { subtract } from './math-subtract-simple';
describe('subtract', () => {
    test('subtracts two numbers', () => {
        expect(subtract(2, 1)).toBe(1);
        expect(subtract(1, 2)).toBe(-1);
    });
});