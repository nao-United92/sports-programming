import { isWeakMap } from './is-weakmap-utils.js';

describe('isWeakMap', () => {
  it('should return true for WeakMap objects', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
  });

  it('should return false for non-WeakMap values', () => {
    expect(isWeakMap(null)).toBe(false);
    expect(isWeakMap(undefined)).toBe(false);
    expect(isWeakMap(123)).toBe(false);
    expect(isWeakMap('string')).toBe(false);
    expect(isWeakMap(true)).toBe(false);
    expect(isWeakMap([])).toBe(false);
    expect(isWeakMap({})).toBe(false);
    expect(isWeakMap(() => {})).toBe(false);
    expect(isWeakMap(new Map())).toBe(false);
    expect(isWeakMap(new Set())).toBe(false);
  });
});
