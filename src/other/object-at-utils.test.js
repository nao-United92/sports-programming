import { at } from './object-at-utils.js';

describe('at', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

  it('should return an array of values for given paths', () => {
    expect(at(object, 'a[0].b.c', 'a[1]')).toEqual([3, 4]);
  });

  it('should support array of paths', () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  });

  it('should return undefined for non-existent paths', () => {
    expect(at(object, 'a[2]')).toEqual([undefined]);
  });

  it('should handle empty paths', () => {
    expect(at(object)).toEqual([]);
  });

  it('should handle null or undefined object', () => {
    expect(at(null, 'a.b')).toEqual([undefined]);
    expect(at(undefined, 'a.b')).toEqual([undefined]);
  });
});
