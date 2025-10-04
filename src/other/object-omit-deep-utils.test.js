
import { omitDeep } from './object-omit-deep-utils.js';

describe('omitDeep', () => {
  it('should create an object with deeply omitted properties', () => {
    const object = { 'a': { 'b': { 'c': 1, 'd': 2 } }, 'e': 3 };
    expect(omitDeep(object, ['a.b.c', 'e'])).toEqual({ 'a': { 'b': { 'd': 2 } } });
  });

  it('should handle paths that are not found', () => {
    const object = { 'a': { 'b': { 'c': 1 } } };
    expect(omitDeep(object, ['a.b.x', 'f'])).toEqual(object);
  });

  it('should return the original object if no paths are provided', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(omitDeep(object, [])).toEqual(object);
  });

  it('should return an empty object for null or undefined input object', () => {
    expect(omitDeep(null, ['a.b'])).toEqual({});
    expect(omitDeep(undefined, ['a.b'])).toEqual({});
  });

  it('should handle a mix of existing and non-existing paths', () => {
    const object = { 'a': { 'b': 1 }, 'c': 2 };
    expect(omitDeep(object, ['a.b', 'd'])).toEqual({ 'a': {}, 'c': 2 });
  });
});
