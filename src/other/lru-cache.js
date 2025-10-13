/**
 * A simple Least Recently Used (LRU) cache implementation.
 */
class LRUCache {
  constructor(maxSize = 10) {
    this.maxSize = maxSize;
    this.cache = new Map();
  }

  get(key) {
    const item = this.cache.get(key);
    if (item) {
      // Move to the end to mark as recently used
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  set(key, value) {
    if (this.cache.has(key)) {
      // If key already exists, delete it to move it to the end later
      this.cache.delete(key);
    } else if (this.cache.size === this.maxSize) {
      // Evict the least recently used item (the first item in map's iteration)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  has(key) {
    return this.cache.has(key);
  }
}

module.exports = { LRUCache };
