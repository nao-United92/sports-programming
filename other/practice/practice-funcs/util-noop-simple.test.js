import { noop } from './util-noop-simple';
describe('noop', () => {
    test('does nothing', () => {
        expect(noop()).toBe(undefined);
    });
});