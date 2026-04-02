const Trie = require('./algo-trie');

describe('Trie', () => {
  test('should insert and search words', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(false);
  });

  test('should handle startsWith correctly', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.startsWith('app')).toBe(true);
    expect(trie.startsWith('appl')).toBe(true);
    expect(trie.startsWith('apple')).toBe(true);
    expect(trie.startsWith('b')).toBe(false);
  });

  test('should handle multiple words', () => {
    const trie = new Trie();
    trie.insert('apple');
    trie.insert('app');
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(true);
  });

  test('should handle non-existent words', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('orange')).toBe(false);
  });
});
