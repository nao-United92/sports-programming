import { tap } from './util-tap-simple';
describe('tap', () => {
    test('runs function and returns value', () => {
        const fn = jest.fn();
        expect(tap(1, fn)).toBe(1);
        expect(fn).toHaveBeenCalledWith(1);
    });
});