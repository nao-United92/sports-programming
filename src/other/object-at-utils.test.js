import { at } from './object-at-utils.js';

describe('at', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

  it('should create an array of values corresponding to paths', () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  });

  it('should return undefined for non-existent paths', () => {
    expect(at(object, ['a[0].b.c', 'a[2]'])).toEqual([3, undefined]);
  });

  it('should handle empty paths array', () => {
    expect(at(object, [])).toEqual([]);
  });

  it('should handle null or undefined object', () => {
    expect(at(null, ['a'])).toEqual([undefined]);
    expect(at(undefined, ['a'])).toEqual([undefined]);
  });
});