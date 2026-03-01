const stringPadBoth = require('./string-pad-both');

test('pads both sides of a string', () => {
  expect(stringPadBoth('abc', 7)).toBe('  abc  ');
  expect(stringPadBoth('abc', 6)).toBe(' abc  ');
});

test('handles original string length >= target length', () => {
  expect(stringPadBoth('abc', 2)).toBe('abc');
});
