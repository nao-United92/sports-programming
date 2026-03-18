import { len } from './string-len-simple';
describe('len', () => {
    test('returns length', () => {
        expect(len('hello')).toBe(5);
        expect(len('')).toBe(0);
    });
});