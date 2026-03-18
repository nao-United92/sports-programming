import { mod } from './math-mod-simple';
describe('mod', () => {
    test('returns remainder', () => {
        expect(mod(5, 2)).toBe(1);
        expect(mod(10, 3)).toBe(1);
    });
});