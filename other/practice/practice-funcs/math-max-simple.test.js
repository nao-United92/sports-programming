import { max } from './math-max-simple';
describe('max', () => {
    test('returns larger number', () => {
        expect(max(1, 2)).toBe(2);
        expect(max(5, 3)).toBe(5);
    });
});