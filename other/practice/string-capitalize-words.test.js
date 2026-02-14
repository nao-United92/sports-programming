const { capitalizeWords } = require('./string-capitalize-words');

describe('capitalizeWords', () => {
  test('should capitalize the first letter of each word in a sentence', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });

  test('should handle multiple spaces between words', () => {
    expect(capitalizeWords('hello   world')).toBe('Hello   World');
  });

  test('should handle leading and trailing spaces', () => {
    expect(capitalizeWords('  hello world  ')).toBe('  Hello World  ');
  });

  test('should handle empty string', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('should handle single word string', () => {
    expect(capitalizeWords('javascript')).toBe('Javascript');
  });

  test('should handle single character words', () => {
    expect(capitalizeWords('a b c')).toBe('A B C');
  });

  test('should convert rest of the word to lowercase', () => {
    expect(capitalizeWords('hELLo wORLd')).toBe('Hello World');
    expect(capitalizeWords('THIS is A TEST')).toBe('This Is A Test');
  });

  test('should throw TypeError if argument is not a string', () => {
    expect(() => capitalizeWords(123)).toThrow(TypeError);
    expect(() => capitalizeWords(null)).toThrow(TypeError);
    expect(() => capitalizeWords(undefined)).toThrow(TypeError);
    expect(() => capitalizeWords({})).toThrow(TypeError);
  });
});
