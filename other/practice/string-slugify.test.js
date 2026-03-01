const stringSlugify = require('./string-slugify');

test('slugifies a string', () => {
  expect(stringSlugify('Hello World!')).toBe('hello-world');
  expect(stringSlugify('  Multiple   Spaces  ')).toBe('multiple-spaces');
});

test('handles special characters', () => {
  expect(stringSlugify('What about & symbols?')).toBe('what-about-symbols');
});
