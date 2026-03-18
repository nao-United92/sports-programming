import { isBoolean } from './check-is-boolean-simple';
describe('isBoolean', () => {
    test('checks if boolean', () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean('true')).toBe(false);
    });
});