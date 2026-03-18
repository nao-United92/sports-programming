import { not } from './bool-not-simple';
describe('not', () => {
    test('negates boolean', () => {
        expect(not(true)).toBe(false);
        expect(not(false)).toBe(true);
    });
});