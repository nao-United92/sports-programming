const unique = require('./array-unique-util');

describe('unique', () => {
  test('returns unique elements of an array', () => {
    expect(unique([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});
