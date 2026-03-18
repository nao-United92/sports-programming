import { identity } from './util-identity-simple';
describe('identity', () => {
    test('returns value as is', () => {
        expect(identity(1)).toBe(1);
        expect(identity('a')).toBe('a');
    });
});