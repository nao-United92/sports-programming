
const objectOmitProperties = require('./object-omit-properties');

describe('objectOmitProperties', () => {
  test('omits specified properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectOmitProperties(obj, ['b'])).toEqual({ a: 1, c: 3 });
  });

  test('handles non-existent keys gracefully', () => {
    const obj = { a: 1 };
    expect(objectOmitProperties(obj, ['z'])).toEqual({ a: 1 });
  });
});
