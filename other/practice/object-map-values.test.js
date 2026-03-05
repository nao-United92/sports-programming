const mapValues = require('./object-map-values');

describe('mapValues', () => {
  test('maps values of an object using an iteratee', () => {
    const users = {
      fred: { user: 'fred', age: 40 },
      pebbles: { user: 'pebbles', age: 1 },
    };
    const result = mapValues(users, (o) => o.age);
    expect(result).toEqual({ fred: 40, pebbles: 1 });
  });

  test('passes key and object to iteratee', () => {
    const obj = { a: 1 };
    mapValues(obj, (val, key, o) => {
      expect(val).toBe(1);
      expect(key).toBe('a');
      expect(o).toBe(obj);
    });
  });

  test('returns an empty object if input is null', () => {
    expect(mapValues(null, (o) => o)).toEqual({});
  });
});
