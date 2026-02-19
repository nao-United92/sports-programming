
const objectPickProperties = require('./object-pick-properties');

describe('objectPickProperties', () => {
  test('picks specified properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectPickProperties(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('ignores missing keys', () => {
    const obj = { a: 1 };
    expect(objectPickProperties(obj, ['b'])).toEqual({});
  });
});
