const { replaceAll } = require('./string-replace-all');

describe('replaceAll', () => {
  it('should replace all occurrences of a substring', () => {
    expect(replaceAll('hello world hello', 'hello', 'hi')).toBe('hi world hi');
  });

  it.skip('should handle an empty search string (replace with replacement at every character boundary)', () => {
    expect(replaceAll('abc', '', '-')).toBe('-a-b-c-');
  });

  it.skip('should handle an empty replacement string', () => {
    expect(replaceAll('banana', 'ana', '')).toBe('bn');
  });

  it('should not replace anything if the search string is not found', () => {
    expect(replaceAll('apple', 'orange', 'grape')).toBe('apple');
  });

  it('should handle special regex characters in search string', () => {
    expect(replaceAll('a.b.c', '.', '-')).toBe('a-b-c');
    expect(replaceAll('a+b+c', '+', '-')).toBe('a-b-c');
  });
  
  it('should return an empty string if the original string is empty', () => {
    expect(replaceAll('', 'a', 'b')).toBe('');
  });

  it('should throw an error if arguments are not strings', () => {
    expect(() => replaceAll(123, '2', '3')).toThrow(TypeError);
    expect(() => replaceAll('abc', 1, 'd')).toThrow(TypeError);
    expect(() => replaceAll('abc', 'b', null)).toThrow(TypeError);
  });
});
