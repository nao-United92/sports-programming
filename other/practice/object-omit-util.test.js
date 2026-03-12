const omit = require('./object-omit-util');

describe('omit', () => {
  test('omits specified keys from object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });
});
