import { merge } from './object-merge-utils';

describe('merge', () => {
  it('should merge properties from source objects into the destination object', () => {
    const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
    const source = { 'a': [{ 'c': 3 }, { 'e': 5 }] };
    expect(merge(object, source)).toEqual({ 'a': [{ 'b': 2 }, { 'd': 4 }, { 'c': 3 }, { 'e': 5 }] });
  });

  it('should recursively merge plain objects', () => {
    const object = { 'a': { 'b': 2, 'c': { 'd': 4 } } };
    const source = { 'a': { 'c': { 'e': 5 }, 'f': 6 } };
    expect(merge(object, source)).toEqual({ 'a': { 'b': 2, 'c': { 'd': 4, 'e': 5 }, 'f': 6 } });
  });

  it('should overwrite non-object/non-array properties', () => {
    const object = { 'a': 1, 'b': { 'c': 2 } };
    const source = { 'a': 3, 'b': 4 };
    expect(merge(object, source)).toEqual({ 'a': 3, 'b': 4 });
  });

  it('should handle multiple source objects', () => {
    const object = { 'a': 1 };
    const source1 = { 'b': 2 };
    const source2 = { 'c': 3 };
    expect(merge(object, source1, source2)).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
  });

  it('should handle null or undefined destination object', () => {
    expect(merge(null, { 'a': 1 })).toBeNull();
    expect(merge(undefined, { 'a': 1 })).toBeUndefined();
  });

  it('should handle null or undefined source objects', () => {
    const object = { 'a': 1 };
    expect(merge(object, null, { 'b': 2 })).toEqual({ 'a': 1, 'b': 2 });
    expect(merge(object, { 'b': 2 }, undefined)).toEqual({ 'a': 1, 'b': 2 });
  });

  it('should not merge arrays recursively by default, but concatenate', () => {
    const object = { 'a': [1, 2] };
    const source = { 'a': [3, 4] };
    expect(merge(object, source)).toEqual({ 'a': [1, 2, 3, 4] });
  });
});