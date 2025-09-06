import { pad } from './string-pad-utils.js';

describe('pad', () => {
  test('should pad a string to a certain length with spaces', () => {
    expect(pad('abc', 5)).toBe(' abc ');
  });

  test('should pad a string with a specified character', () => {
    expect(pad('abc', 7, '*')).toBe('**abc**');
  });

  test('should not pad if the string is already long enough', () => {
    expect(pad('abcde', 5)).toBe('abcde');
    expect(pad('abcdef', 5)).toBe('abcdef');
  });

  test('should handle odd padding correctly', () => {
    expect(pad('abc', 6)).toBe(' abc  ');
  });
});
