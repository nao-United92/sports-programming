const capitalize = require('./string-capitalize-util');

describe('capitalize', () => {
  test('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('World');
  });
  test('returns empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });
});
