import { toLower } from './string-lower-simple';
describe('toLower', () => {
    test('converts to lowercase', () => {
        expect(toLower('HELLO')).toBe('hello');
        expect(toLower('World')).toBe('world');
    });
});