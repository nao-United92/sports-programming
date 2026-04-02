const LRUCache = require('./algo-lru-cache');

describe('LRUCache', () => {
  test('should store and retrieve items', () => {
    const cache = new LRUCache(2);
    cache.put(1, 'one');
    expect(cache.get(1)).toBe('one');
  });

  test('should return undefined for non-existent keys', () => {
    const cache = new LRUCache(2);
    expect(cache.get(1)).toBeUndefined();
  });

  test('should evict least recently used item', () => {
    const cache = new LRUCache(2);
    cache.put(1, 'one');
    cache.put(2, 'two');
    cache.put(3, 'three'); // Evicts 1
    expect(cache.get(1)).toBeUndefined();
    expect(cache.get(2)).toBe('two');
    expect(cache.get(3)).toBe('three');
  });

  test('should update recency on get', () => {
    const cache = new LRUCache(2);
    cache.put(1, 'one');
    cache.put(2, 'two');
    cache.get(1); // 1 is now most recently used
    cache.put(3, 'three'); // Evicts 2
    expect(cache.get(2)).toBeUndefined();
    expect(cache.get(1)).toBe('one');
    expect(cache.get(3)).toBe('three');
  });

  test('should update recency on put of existing key', () => {
    const cache = new LRUCache(2);
    cache.put(1, 'one');
    cache.put(2, 'two');
    cache.put(1, 'one updated');
    cache.put(3, 'three'); // Evicts 2
    expect(cache.get(2)).toBeUndefined();
    expect(cache.get(1)).toBe('one updated');
    expect(cache.get(3)).toBe('three');
  });

  test('should report current size', () => {
    const cache = new LRUCache(5);
    cache.put(1, 'one');
    cache.put(2, 'two');
    expect(cache.size).toBe(2);
  });
});
