const { truncate } = require('./string-trimmer.js');

describe('truncate', () => {
  test('should return the original string if its length is less than or equal to the specified length', () => {
    expect(truncate('hello', 5)).toBe('hello');
    expect(truncate('hello', 6)).toBe('hello');
  });

  test('should truncate a string and append ellipsis', () => {
    expect(truncate('hello world', 7)).toBe('hell...');
    expect(truncate('long string example', 10)).toBe('long st...');
  });

  test('should use custom ellipsis', () => {
    expect(truncate('hello world', 7, '---')).toBe('hell---');
  });

  test('should handle very small length values', () => {
    expect(truncate('hello', 1)).toBe('h'); // "h" + "" because ellipsis length is 3
    expect(truncate('hello', 2)).toBe('he');
    expect(truncate('hello', 3)).toBe('hel');
    expect(truncate('hello', 4)).toBe('h...'); // Adjusted behavior for truncatedLength < 0
  });

  test('should return empty string if input string is empty', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('should throw an error if the first argument is not a string', () => {
    expect(() => truncate(null, 5)).toThrow('Expected a string for the first argument.');
    expect(() => truncate(undefined, 5)).toThrow('Expected a string for the first argument.');
    expect(() => truncate(123, 5)).toThrow('Expected a string for the first argument.');
    expect(() => truncate({}, 5)).toThrow('Expected a string for the first argument.');
  });

  test('should throw an error if the second argument is not a non-negative number', () => {
    expect(() => truncate('hello', 'abc')).toThrow('Expected a non-negative number for the second argument.');
    expect(() => truncate('hello', -1)).toThrow('Expected a non-negative number for the second argument.');
    expect(() => truncate('hello', null)).toThrow('Expected a non-negative number for the second argument.');
  });
});
