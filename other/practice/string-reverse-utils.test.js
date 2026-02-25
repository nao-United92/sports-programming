import { stringReverse } from './string-reverse-utils';

describe('stringReverse', () => {
  test('reverses a string', () => {
    expect(stringReverse('hello')).toBe('olleh');
  });

  test('reverses a string with spaces', () => {
    expect(stringReverse('hello world')).toBe('dlrow olleh');
  });

  test('throws error for non-string input', () => {
    expect(() => stringReverse(123)).toThrow('Input must be a string');
  });
});
