import { and } from './bool-and-simple';
describe('and', () => {
    test('logical AND', () => {
        expect(and(true, true)).toBe(true);
        expect(and(true, false)).toBe(false);
    });
});