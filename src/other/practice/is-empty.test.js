import { isEmpty } from './is-empty';

describe('isEmpty', () => {
  it('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true for empty arrays and strings', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  it('should return false for non-empty arrays and strings', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('abc')).toBe(false);
  });

  it('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for non-empty objects', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });

  it('should return true for empty maps and sets', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  it('should return false for non-empty maps and sets', () => {
    const map = new Map();
    map.set('a', 1);
    const set = new Set();
    set.add(1);
    expect(isEmpty(map)).toBe(false);
    expect(isEmpty(set)).toBe(false);
  });

  it('should return false for numbers and booleans', () => {
    expect(isEmpty(1)).toBe(false);
    expect(isEmpty(true)).toBe(false);
  });

  it('should return false for object with prototype', () => {
    function MyObject() {}
    const myObjectInstance = new MyObject();
    expect(isEmpty(myObjectInstance)).toBe(false);
  });
});
