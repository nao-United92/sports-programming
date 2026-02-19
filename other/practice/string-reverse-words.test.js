
const stringReverseWords = require('./string-reverse-words');

describe('stringReverseWords', () => {
  test('reverses words in a sentence', () => {
    expect(stringReverseWords('Hello World')).toBe('World Hello');
  });

  test('handles single word', () => {
    expect(stringReverseWords('Hello')).toBe('Hello');
  });

  test('handles multiple spaces (collapses them)', () => {
    expect(stringReverseWords('a b  c')).toBe('c b a');
  });
});
