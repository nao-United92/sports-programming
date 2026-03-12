const pick = require('./object-pick-util');

describe('pick', () => {
  test('picks specified keys from object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });
});
