import { isString } from './check-is-string-simple';
describe('isString', () => {
    test('checks if string', () => {
        expect(isString('hello')).toBe(true);
        expect(isString(123)).toBe(false);
    });
});