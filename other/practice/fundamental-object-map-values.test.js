const mapValues = require('./fundamental-object-map-values');

describe('mapValues', () => {
  test('should map values of an object', () => {
    const users = {
      fred: { user: 'fred', age: 40 },
      pebbles: { user: 'pebbles', age: 1 }
    };
    const result = mapValues(users, (o) => o.age);
    expect(result).toEqual({ fred: 40, pebbles: 1 });
  });

  test('should handle empty objects', () => {
    expect(mapValues({}, (o) => o)).toEqual({});
  });

  test('should provide key and object to the callback', () => {
    const obj = { a: 1 };
    mapValues(obj, (value, key, object) => {
      expect(value).toBe(1);
      expect(key).toBe('a');
      expect(object).toBe(obj);
    });
  });
});
