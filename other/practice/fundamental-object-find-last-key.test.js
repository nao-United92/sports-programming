const findLastKey = require('./fundamental-object-find-last-key');

describe('findLastKey', () => {
  const users = {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  };

  test('should find last key by predicate', () => {
    expect(findLastKey(users, (o) => o.active)).toBe('pebbles');
  });

  test('should return undefined if no key matches', () => {
    expect(findLastKey(users, (o) => o.age > 100)).toBeUndefined();
  });

  test('should handle empty objects', () => {
    expect(findLastKey({}, (o) => true)).toBeUndefined();
  });
});
