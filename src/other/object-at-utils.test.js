import { at } from './object-at-utils';

describe('at', () => {
  const object = {
    'a': [{ 'b': { 'c': 3 } }, 4],
    'd': { 'e': 5 }
  };

  it('should return an array of values for given paths', () => {
    const result = at(object, 'd.e', ['a', '0', 'b', 'c']);
    expect(result).toEqual([5, 3]);
  });

  it('should handle single paths', () => {
    expect(at(object, 'a[1]')).toEqual([4]);
  });

  it('should return undefined for non-existent paths', () => {
    const result = at(object, 'x.y', 'a[2]');
    expect(result).toEqual([undefined, undefined]);
  });

  it('should handle mixed string and array paths', () => {
    const result = at(object, 'd.e', 'a[0].b.c');
    expect(result).toEqual([5, 3]);
  });
});
