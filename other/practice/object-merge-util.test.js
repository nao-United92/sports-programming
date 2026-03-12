const merge = require('./object-merge-util');

describe('merge', () => {
  test('merges multiple objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    expect(merge(obj1, obj2)).toEqual({ a: 1, b: 2 });
  });
});
