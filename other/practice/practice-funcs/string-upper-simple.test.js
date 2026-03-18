import { toUpper } from './string-upper-simple';
describe('toUpper', () => {
    test('converts to uppercase', () => {
        expect(toUpper('hello')).toBe('HELLO');
        expect(toUpper('World')).toBe('WORLD');
    });
});