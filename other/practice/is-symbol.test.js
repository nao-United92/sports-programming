import isSymbol from './is-symbol';

describe('isSymbol', () => {
  test('should return true for a Symbol primitive', () => {
    expect(isSymbol(Symbol('foo'))).toBe(true);
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });

  test('should return true for a Symbol object (rare but possible)', () => {
    // eslint-disable-next-line no-new-wrappers
    expect(isSymbol(Object(Symbol('foo')))).toBe(true);
  });

  test('should return false for non-Symbol values', () => {
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol([])).toBe(false);
    expect(isSymbol(123)).toBe(false);
    expect(isSymbol('symbol')).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol(new String('symbol'))).toBe(false);
  });
});
