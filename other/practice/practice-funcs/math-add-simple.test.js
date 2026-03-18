import { add } from './math-add-simple';
describe('add', () => {
    test('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 1)).toBe(0);
    });
});