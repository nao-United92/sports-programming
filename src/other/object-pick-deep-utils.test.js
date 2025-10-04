
import { pickDeep } from './object-pick-deep-utils.js';

describe('pickDeep', () => {
  it('should create an object with deeply picked properties', () => {
    const object = { 'a': { 'b': { 'c': 1, 'd': 2 } }, 'e': 3 };
    expect(pickDeep(object, ['a.b.c', 'e'])).toEqual({ 'a': { 'b': { 'c': 1 } }, 'e': 3 });
  });

  it('should handle paths that are not found', () => {
    const object = { 'a': { 'b': { 'c': 1 } } };
    expect(pickDeep(object, ['a.b.x', 'f'])).toEqual({});
  });

  it('should return an empty object if no paths are provided', () => {
    const object = { 'a': 1, 'b': '2' };
    expect(pickDeep(object, [])).toEqual({});
  });

  it('should return an empty object for null or undefined input object', () => {
    expect(pickDeep(null, ['a.b'])).toEqual({});
    expect(pickDeep(undefined, ['a.b'])).toEqual({});
  });

  it('should handle a mix of existing and non-existing paths', () => {
    const object = { 'a': { 'b': 1 }, 'c': 2 };
    expect(pickDeep(object, ['a.b', 'd'])).toEqual({ 'a': { 'b': 1 } });
  });

  it('should not create nested properties if they do not exist', () => {
    const object = { a: 1 };
    expect(pickDeep(object, ['b.c'])).toEqual({});
  });
});
