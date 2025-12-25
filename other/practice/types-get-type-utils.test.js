const { getType } = require('./types-get-type-utils.js');

describe('getType', () => {
  it('should correctly identify primitive types', () => {
    expect(getType(undefined)).toBe('undefined');
    expect(getType(null)).toBe('null');
    expect(getType('hello')).toBe('string');
    expect(getType(123)).toBe('number');
    expect(getType(true)).toBe('boolean');
    expect(getType(Symbol('id'))).toBe('symbol');
  });

  it('should correctly identify object types', () => {
    expect(getType({})).toBe('object');
    expect(getType([])).toBe('array');
    expect(getType(new Date())).toBe('date');
    expect(getType(/a/)).toBe('regexp');
    expect(getType(new Error())).toBe('error');
  });

  it('should correctly identify function type', () => {
    expect(getType(() => {})).toBe('function');
  });
});
