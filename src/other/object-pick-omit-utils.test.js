const assert = require('assert');
const { pick, omit } = require('./object-pick-omit-utils.js');

describe('pick', () => {
  it('should create an object with picked properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    assert.deepStrictEqual(pick(object, ['a', 'c']), { 'a': 1, 'c': 3 });
  });

  it('should handle empty keys', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    assert.deepStrictEqual(pick(object, []), {});
  });

  it('should handle keys that do not exist', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    assert.deepStrictEqual(pick(object, ['a', 'd']), { 'a': 1 });
  });
});

describe('omit', () => {
  it('should create an object without omitted properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    assert.deepStrictEqual(omit(object, ['a', 'c']), { 'b': '2' });
  });

  it('should handle empty keys', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    assert.deepStrictEqual(omit(object, []), { 'a': 1, 'b': '2', 'c': 3 });
  });

  it('should handle keys that do not exist', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    assert.deepStrictEqual(omit(object, ['d']), { 'a': 1, 'b': '2', 'c': 3 });
  });
});
