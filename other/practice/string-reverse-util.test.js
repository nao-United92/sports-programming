const stringReverse = require('./string-reverse-util');

describe('stringReverse', () => {
  test('reverses a string', () => {
    expect(stringReverse('hello')).toBe('olleh');
  });

  test('throws error for non-string input', () => {
    expect(() => stringReverse(123)).toThrow('Input must be a string');
  });
});
