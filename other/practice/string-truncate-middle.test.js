const stringTruncateMiddle = require('./string-truncate-middle');

test('truncates middle of string', () => {
  expect(stringTruncateMiddle('hello world', 8)).toBe('hel...ld');
});

test('returns original string if length is sufficient', () => {
  expect(stringTruncateMiddle('hello', 10)).toBe('hello');
});

test('handles short target length', () => {
  expect(stringTruncateMiddle('hello world', 2)).toBe('..');
});
