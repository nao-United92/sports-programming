/**
 * A basic Trie (prefix tree) data structure.
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word - The word to insert.
   */
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  /**
   * Searches for a word in the trie.
   * @param {string} word - The word to search for.
   * @returns {boolean} True if the word is in the trie.
   */
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix - The prefix to check.
   * @returns {boolean} True if any word starts with the prefix.
   */
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}

module.exports = Trie;
