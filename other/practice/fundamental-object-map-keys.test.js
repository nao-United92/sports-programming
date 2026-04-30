const mapKeys = require('./fundamental-object-map-keys');

describe('mapKeys', () => {
  test('maps keys of an object based on the provided function', () => {
    const obj = { a: 1, b: 2 };
    const result = mapKeys(obj, (val, key) => key + val);
    expect(result).toEqual({ a1: 1, b2: 2 });
  });

  test('handles empty object', () => {
    expect(mapKeys({}, () => {})).toEqual({});
  });
});
