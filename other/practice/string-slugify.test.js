const slugify = require('./string-slugify');

describe('slugify', () => {
  test('should convert string to lowercase and replace spaces with hyphens', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('should handle multiple spaces and underscores', () => {
    expect(slugify('Hello   World__Foo')).toBe('hello-world-foo');
  });

  test('should remove special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  test('should trim leading and trailing hyphens', () => {
    expect(slugify('---Hello World---')).toBe('hello-world');
  });

  test('should handle mixed case and special characters', () => {
    expect(slugify('GitHub CLI - Is Awesome!')).toBe('github-cli-is-awesome');
  });
});
