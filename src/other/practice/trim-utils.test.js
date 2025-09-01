import { trim } from './trim-utils';

describe('trim', () => {
  test('should remove leading and trailing whitespace', () => {
    const str = '   hello world   ';
    const expected = 'hello world';
    expect(trim(str)).toBe(expected);
  });

  test('should not change a string with no leading or trailing whitespace', () => {
    const str = 'hello world';
    const expected = 'hello world';
    expect(trim(str)).toBe(expected);
  });

  test('should handle an empty string', () => {
    const str = '';
    const expected = '';
    expect(trim(str)).toBe(expected);
  });

  test('should handle a string with only whitespace', () => {
    const str = '   ';
    const expected = '';
    expect(trim(str)).toBe(expected);
  });
});
