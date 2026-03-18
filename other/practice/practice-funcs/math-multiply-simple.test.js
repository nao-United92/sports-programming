import { multiply } from './math-multiply-simple';
describe('multiply', () => {
    test('multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
    });
});