const { LRUCache } = require('./lru-cache.js');

describe('LRUCache', () => {
  test('should set and get items', () => {
    const cache = new LRUCache(2);
    cache.set('a', 1);
    cache.set('b', 2);
    expect(cache.get('a')).toBe(1);
    expect(cache.get('b')).toBe(2);
  });

  test('should evict the least recently used item when full', () => {
    const cache = new LRUCache(2);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.set('c', 3); // This should evict 'a'

    expect(cache.get('a')).toBeUndefined();
    expect(cache.get('b')).toBe(2);
    expect(cache.get('c')).toBe(3);
  });

  test('should update the usage of an item on get', () => {
    const cache = new LRUCache(2);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.get('a'); // 'a' is now the most recently used
    cache.set('c', 3); // This should evict 'b'

    expect(cache.get('b')).toBeUndefined();
    expect(cache.get('a')).toBe(1);
    expect(cache.get('c')).toBe(3);
  });

  test('should update a value if key already exists', () => {
    const cache = new LRUCache(2);
    cache.set('a', 1);
    cache.set('a', 100);
    expect(cache.get('a')).toBe(100);
    expect(cache.cache.size).toBe(1);
  });
});
