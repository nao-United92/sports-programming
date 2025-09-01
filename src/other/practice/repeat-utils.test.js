import { repeat } from './repeat-utils';

describe('repeat', () => {
  test('should repeat a string a specified number of times', () => {
    const str = 'abc';
    const n = 3;
    const expected = 'abcabcabc';
    expect(repeat(str, n)).toBe(expected);
  });

  test('should return an empty string if n is 0', () => {
    const str = 'abc';
    const n = 0;
    const expected = '';
    expect(repeat(str, n)).toBe(expected);
  });

  test('should return an empty string if the input string is empty', () => {
    const str = '';
    const n = 5;
    const expected = '';
    expect(repeat(str, n)).toBe(expected);
  });

  test('should handle a single repetition', () => {
    const str = 'abc';
    const n = 1;
    const expected = 'abc';
    expect(repeat(str, n)).toBe(expected);
  });
});
