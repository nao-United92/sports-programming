import { cloneDeep } from './deep-clone-robust-utils.js';

describe('cloneDeep', () => {
  it('should deep clone an object with nested properties', () => {
    const obj = { a: 1, b: { c: 2, d: [3, 4] } };
    const cloned = cloneDeep(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
    expect(cloned.b.d).not.toBe(obj.b.d);
  });

  it('should deep clone an array', () => {
    const arr = [1, [2, 3], { a: 4 }];
    const cloned = cloneDeep(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
    expect(cloned[2]).not.toBe(arr[2]);
  });

  it('should handle primitive values', () => {
    expect(cloneDeep(1)).toBe(1);
    expect(cloneDeep('hello')).toBe('hello');
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(undefined)).toBe(undefined);
  });

  it('should clone Date objects', () => {
    const date = new Date();
    const cloned = cloneDeep(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
  });

  it('should clone RegExp objects', () => {
    const regex = /foo/g;
    const cloned = cloneDeep(regex);
    expect(cloned).toEqual(regex);
    expect(cloned).not.toBe(regex);
  });

  it('should clone Map objects', () => {
    const map = new Map([['a', 1], ['b', { c: 2 }]]);
    const cloned = cloneDeep(map);
    expect(cloned).toEqual(map);
    expect(cloned).not.toBe(map);
    expect(cloned.get('b')).not.toBe(map.get('b'));
  });

  it('should clone Set objects', () => {
    const set = new Set([1, { a: 2 }]);
    const cloned = cloneDeep(set);
    expect(cloned).toEqual(set);
    expect(cloned).not.toBe(set);
    // Note: Set equality is based on value, so we can't easily check for deep inequality of members without iterating.
  });
});
