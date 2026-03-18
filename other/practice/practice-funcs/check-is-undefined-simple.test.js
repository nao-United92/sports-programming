import { isUndefined } from './check-is-undefined-simple';
describe('isUndefined', () => {
    test('checks if undefined', () => {
        expect(isUndefined(undefined)).toBe(true);
        expect(isUndefined(null)).toBe(false);
    });
});