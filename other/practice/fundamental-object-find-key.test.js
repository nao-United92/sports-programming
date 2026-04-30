const findKey = require('./fundamental-object-find-key');

describe('findKey', () => {
  const users = {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  };

  test('should find key by predicate', () => {
    expect(findKey(users, (o) => o.age < 40)).toBe('barney');
  });

  test('should return undefined if no key matches', () => {
    expect(findKey(users, (o) => o.age > 100)).toBeUndefined();
  });

  test('should handle empty objects', () => {
    expect(findKey({}, (o) => true)).toBeUndefined();
  });
});
