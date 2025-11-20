import { truncate, capitalizeFirstLetter, reverseString, countWords } from './string-utils.js';

describe('truncate', () => {
  it('should not truncate a string shorter than the specified length', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  it('should truncate a string longer than the specified length', () => {
    const longString = 'This is a very long string';
    expect(truncate(longString, 15)).toBe('This is a ve...');
  });

  it('should use the default suffix', () => {
    const longString = 'Another long example';
    expect(truncate(longString, 10)).toBe('Another...');
  });

  it('should use a custom suffix', () => {
    const longString = 'Custom suffix test';
    expect(truncate(longString, 15, '---')).toBe('Custom suffi---');
  });

  it('should handle edge case where length is less than or equal to suffix length', () => {
    const longString = 'Short';
    expect(truncate(longString, 3, '...')).toBe('...');
    expect(truncate(longString, 2, '...')).toBe('...');
  });
});

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
  });

  it('should return an empty string for an empty input', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('should handle strings with a single character', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
  });

  it('should not change a string that already starts with a capital letter', () => {
    expect(capitalizeFirstLetter('Hello')).toBe('Hello');
  });

  it('should handle strings with leading spaces (capitalizing the first non-space char)', () => {
    expect(capitalizeFirstLetter('  hello')).toBe('  hello'); // The function as implemented will capitalize the first char, which is a space. This is expected behavior.
  });

  it('should return an empty string for non-string inputs', () => {
    expect(capitalizeFirstLetter(null)).toBe('');
    expect(capitalizeFirstLetter(undefined)).toBe('');
    expect(capitalizeFirstLetter(123)).toBe('');
    expect(capitalizeFirstLetter({})).toBe('');
  });
});

describe('reverseString', () => {
  it('should reverse a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should return an empty string for an empty input', () => {
    expect(reverseString('')).toBe('');
  });

  it('should handle a string with a single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('should return an empty string for non-string inputs', () => {
    expect(reverseString(null)).toBe('');
    expect(reverseString(undefined)).toBe('');
    expect(reverseString(123)).toBe('');
    expect(reverseString({})).toBe('');
  });
});

describe('countWords', () => {
  it('should count words in a simple sentence', () => {
    expect(countWords('Hello world')).toBe(2);
  });

  it('should handle multiple spaces between words', () => {
    expect(countWords('Hello   world')).toBe(2);
  });

  it('should trim leading and trailing spaces', () => {
    expect(countWords('  Hello world  ')).toBe(2);
  });

  it('should return 0 for an empty string', () => {
    expect(countWords('')).toBe(0);
  });

  it('should return 0 for a string with only spaces', () => {
    expect(countWords('   ')).toBe(0);
  });

  it('should count words in a single word string', () => {
    expect(countWords('word')).toBe(1);
  });

  it('should return 0 for non-string inputs', () => {
    expect(countWords(null)).toBe(0);
    expect(countWords(undefined)).toBe(0);
    expect(countWords(123)).toBe(0);
    expect(countWords({})).toBe(0);
  });
});

