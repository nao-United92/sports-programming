import { isSet } from './is-set-utils.js';

describe('isSet', () => {
  it('should return true for Set objects', () => {
    expect(isSet(new Set())).toBe(true);
  });

  it('should return false for non-Set values', () => {
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
    expect(isSet(123)).toBe(false);
    expect(isSet('string')).toBe(false);
    expect(isSet(true)).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet({})).toBe(false);
    expect(isSet(() => {})).toBe(false);
    expect(isSet(new Map())).toBe(false);
  });
});
