import { isMap } from './is-map-utils.js';

describe('isMap', () => {
  it('should return true for Map objects', () => {
    expect(isMap(new Map())).toBe(true);
  });

  it('should return false for non-Map values', () => {
    expect(isMap(null)).toBe(false);
    expect(isMap(undefined)).toBe(false);
    expect(isMap(123)).toBe(false);
    expect(isMap('string')).toBe(false);
    expect(isMap(true)).toBe(false);
    expect(isMap([])).toBe(false);
    expect(isMap({})).toBe(false);
    expect(isMap(() => {})).toBe(false);
    expect(isMap(new Set())).toBe(false);
  });
});
