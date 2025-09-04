import findKey from './find-key-utils.js';

describe('findKey', () => {
  const users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

  test('should return the key of the first element predicate returns truthy for', () => {
    const result = findKey(users, o => o.age < 40);
    expect(result).toBe('barney');
  });

  test('should return undefined if no element satisfies the predicate', () => {
    const result = findKey(users, o => o.age > 50);
    expect(result).toBeUndefined();
  });

  test('should pass correct arguments to predicate', () => {
    const predicate = jest.fn();
    findKey({ a: 1 }, predicate);
    expect(predicate).toHaveBeenCalledWith(1, 'a', { a: 1 });
  });

  test('should handle null or undefined input', () => {
    expect(findKey(null, () => true)).toBeUndefined();
    expect(findKey(undefined, () => true)).toBeUndefined();
  });

  test('should handle an empty object', () => {
    expect(findKey({}, () => true)).toBeUndefined();
  });
});
