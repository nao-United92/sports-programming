const getValues = require('./object-values-util');

describe('getValues', () => {
  test('returns values of an object', () => {
    const obj = { a: 1, b: 2 };
    expect(getValues(obj)).toEqual([1, 2]);
  });
});
