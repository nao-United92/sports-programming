import { wordWrap } from './string-word-wrap-utils.js';

describe('wordWrap', () => {
  test('should wrap a long string into multiple lines', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const expected = 'Lorem ipsum dolor\nsit amet,\nconsectetur\nadipiscing elit.';
    expect(wordWrap(str, 20)).toBe(expected);
  });

  test('should not wrap a string shorter than the width', () => {
    const str = 'Hello world';
    expect(wordWrap(str, 20)).toBe(str);
  });

  test('should handle a single long word', () => {
    const str = 'Supercalifragilisticexpialidocious';
    expect(wordWrap(str, 20)).toBe(str);
  });

  test('should handle empty string', () => {
    expect(wordWrap('', 20)).toBe('');
  });

  test('should handle null and undefined', () => {
    expect(wordWrap(null, 20)).toBe('');
    expect(wordWrap(undefined, 20)).toBe('');
  });
});