import { square } from './math-square-simple';
describe('square', () => {
    test('squares a number', () => {
        expect(square(2)).toBe(4);
        expect(square(-3)).toBe(9);
    });
});