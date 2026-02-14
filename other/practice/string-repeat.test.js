const { repeatString } = require('./string-repeat');

describe('repeatString', () => {
  test('should repeat a string a given number of times', () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc');
  });

  test('should return an empty string if num is 0', () => {
    expect(repeatString('abc', 0)).toBe('');
  });

  test('should return an empty string if given an empty string and num > 0', () => {
    expect(repeatString('', 5)).toBe('');
  });

  test('should handle single character strings', () => {
    expect(repeatString('a', 4)).toBe('aaaa');
  });

  test('should throw TypeError if first argument is not a string', () => {
    expect(() => repeatString(123, 2)).toThrow(TypeError);
    expect(() => repeatString(null, 2)).toThrow(TypeError);
    expect(() => repeatString(undefined, 2)).toThrow(TypeError);
    expect(() => repeatString({}, 2)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a number', () => {
    expect(() => repeatString('abc', '2')).toThrow(TypeError);
    expect(() => repeatString('abc', null)).toThrow(TypeError);
    expect(() => repeatString('abc', undefined)).toThrow(TypeError);
    expect(() => repeatString('abc', {})).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is a negative number', () => {
    expect(() => repeatString('abc', -1)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is a float', () => {
    expect(() => repeatString('abc', 2.5)).toThrow(TypeError);
  });
});
