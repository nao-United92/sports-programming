import { or } from './bool-or-simple';
describe('or', () => {
    test('logical OR', () => {
        expect(or(true, false)).toBe(true);
        expect(or(false, false)).toBe(false);
    });
});