import { isSymbol } from './is-symbol-utils';

describe('isSymbol', () => {
  it('should return true for Symbol primitives', () => {
    expect(isSymbol(Symbol('a'))).toBe(true);
    expect(isSymbol(Symbol())).toBe(true);
  });

  it('should return true for Symbol objects', () => {
    // Symbol objects are rare, but technically possible
    expect(isSymbol(Object(Symbol('b')))).toBe(true);
  });

  it('should return false for non-Symbol types', () => {
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol(123)).toBe(false);
    expect(isSymbol('string')).toBe(false);
    expect(isSymbol(true)).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol([])).toBe(false);
    expect(isSymbol(() => {})).toBe(false);
  });
});
