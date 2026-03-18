import { trim } from './string-trim-simple';
describe('trim', () => {
    test('trims whitespace', () => {
        expect(trim('  hello  ')).toBe('hello');
        expect(trim('\tworld\n')).toBe('world');
    });
});