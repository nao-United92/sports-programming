import { pad } from './string-pad-utils.js';

describe('pad', () => {
  test('should not pad a string that is already long enough', () => {
    expect(pad('hello', 5)).toBe('hello');
    expect(pad('hello world', 10)).toBe('hello world');
  });

  test('should pad a string to the specified length', () => {
    expect(pad('hello', 10)).toBe('  hello   ');
  });

  test('should pad with a custom character', () => {
    expect(pad('hello', 10, '_')).toBe('__hello___');
  });

  test('should handle odd and even padding correctly', () => {
    expect(pad('cat', 5)).toBe(' cat ');
    expect(pad('dog', 6)).toBe(' dog  ');
  });

  test('should handle empty string', () => {
    expect(pad('', 5, '*')).toBe('*****');
  });
});
