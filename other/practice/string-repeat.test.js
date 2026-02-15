const repeatString = require('./string-repeat');

describe('repeatString', () => {
  test('should repeat the string a specified number of times', () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc');
  });

  test('should return an empty string if count is 0', () => {
    expect(repeatString('abc', 0)).toBe('');
  });

  test('should return an empty string if the input string is empty', () => {
    expect(repeatString('', 5)).toBe('');
  });

  test('should handle count being 1', () => {
    expect(repeatString('xyz', 1)).toBe('xyz');
  });

  test('should throw an error if the first argument is not a string', () => {
    expect(() => repeatString(123, 2)).toThrow('First argument must be a string.');
    expect(() => repeatString(null, 2)).toThrow('First argument must be a string.');
  });

  test('should throw an error if count is not a number', () => {
    expect(() => repeatString('abc', '2')).toThrow('Second argument (count) must be a non-negative integer.');
  });

  test('should throw an error if count is negative', () => {
    expect(() => repeatString('abc', -1)).toThrow('Second argument (count) must be a non-negative integer.');
  });

  test('should throw an error if count is not an integer', () => {
    expect(() => repeatString('abc', 2.5)).toThrow('Second argument (count) must be a non-negative integer.');
  });
});
