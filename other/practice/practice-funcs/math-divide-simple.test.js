import { divide } from './math-divide-simple';
describe('divide', () => {
    test('divides two numbers', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(5, 2)).toBe(2.5);
    });
    test('throws on division by zero', () => {
        expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
    });
});