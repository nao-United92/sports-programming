const { uniqueId, _resetUniqueIdCounter } = require('./unique-id-utils.js');

describe('uniqueId', () => {
  beforeEach(() => {
    // Reset counters before each test to ensure independence
    _resetUniqueIdCounter('test_');
    _resetUniqueIdCounter('id_');
    _resetUniqueIdCounter('prefixA_');
    _resetUniqueIdCounter('prefixB_');
  });

  it('should generate sequential IDs with a given prefix', () => {
    expect(uniqueId('test_')).toBe('test_1');
    expect(uniqueId('test_')).toBe('test_2');
    expect(uniqueId('test_')).toBe('test_3');
  });

  it('should use a default prefix if none is provided', () => {
    expect(uniqueId()).toBe('id_1');
    expect(uniqueId()).toBe('id_2');
  });

  it('should maintain separate counters for different prefixes', () => {
    expect(uniqueId('prefixA_')).toBe('prefixA_1');
    expect(uniqueId('prefixB_')).toBe('prefixB_1');
    expect(uniqueId('prefixA_')).toBe('prefixA_2');
    expect(uniqueId('prefixB_')).toBe('prefixB_2');
  });

  it('should return a string', () => {
    expect(typeof uniqueId()).toBe('string');
  });
});
