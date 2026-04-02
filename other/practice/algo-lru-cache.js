/**
 * A simple Least Recently Used (LRU) cache implementation.
 */
class LRUCache {
  /**
   * @param {number} capacity - The maximum number of items the cache can hold.
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  /**
   * Retrieves an item from the cache.
   * 
   * @param {any} key - The key of the item to retrieve.
   * @returns {any} The value of the item, or undefined if not found.
   */
  get(key) {
    if (!this.cache.has(key)) {
      return undefined;
    }

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  /**
   * Adds or updates an item in the cache.
   * 
   * @param {any} key - The key of the item.
   * @param {any} value - The value of the item.
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Remove the least recently used item (the first item in the Map)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  /**
   * @returns {number} The current size of the cache.
   */
  get size() {
    return this.cache.size;
  }
}

module.exports = LRUCache;
