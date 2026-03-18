import { concat } from './string-concat-simple';
describe('concat', () => {
    test('concatenates strings', () => {
        expect(concat('hello', ' world')).toBe('hello world');
    });
});