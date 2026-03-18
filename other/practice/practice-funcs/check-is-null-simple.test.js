import { isNull } from './check-is-null-simple';
describe('isNull', () => {
    test('checks if null', () => {
        expect(isNull(null)).toBe(true);
        expect(isNull(undefined)).toBe(false);
    });
});