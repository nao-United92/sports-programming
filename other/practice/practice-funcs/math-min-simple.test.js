import { min } from './math-min-simple';
describe('min', () => {
    test('returns smaller number', () => {
        expect(min(1, 2)).toBe(1);
        expect(min(5, 3)).toBe(3);
    });
});