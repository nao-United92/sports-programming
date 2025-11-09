const { uniqueId, _test_resetIdCounter } = require('./id-utils');

describe('uniqueId', () => {
  beforeEach(() => {
    _test_resetIdCounter();
  });

  test('should generate unique IDs without a prefix', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    const id3 = uniqueId();

    expect(id1).toBe('1');
    expect(id2).toBe('2');
    expect(id3).toBe('3');
    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
  });

  test('should generate unique IDs with a given prefix', () => {
    const id1 = uniqueId('user_');
    const id2 = uniqueId('user_');
    const id3 = uniqueId('item-');

    expect(id1).toBe('user_1');
    expect(id2).toBe('user_2');
    expect(id3).toBe('item-3');
    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
  });

  test('should generate IDs that are strings', () => {
    expect(typeof uniqueId()).toBe('string');
    expect(typeof uniqueId('test_')).toBe('string');
  });

  test('should continue incrementing across different prefixes', () => {
    const id1 = uniqueId('a');
    const id2 = uniqueId('b');
    const id3 = uniqueId('c');

    expect(id1).toBe('a1');
    expect(id2).toBe('b2');
    expect(id3).toBe('c3');
  });
});