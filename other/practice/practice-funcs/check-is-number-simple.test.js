import { isNumber } from './check-is-number-simple';
describe('isNumber', () => {
    test('checks if number', () => {
        expect(isNumber(123)).toBe(true);
        expect(isNumber('123')).toBe(false);
    });
});