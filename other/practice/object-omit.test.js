const omit = require('./object-omit');

describe('omit', () => {
  it('should omit specified keys', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 });
  });

  it('should handle non-existent keys', () => {
    expect(omit({ a: 1, b: 2 }, ['c'])).toEqual({ a: 1, b: 2 });
  });

  it('should handle empty object', () => {
    expect(omit({}, ['a'])).toEqual({});
  });

  it('should handle null/undefined source', () => {
    expect(omit(null, ['a'])).toEqual({});
    expect(omit(undefined, ['a'])).toEqual({});
  });
});
