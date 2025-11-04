import { merge } from './object-merge-utils.js';

describe('merge', () => {
  test('should merge properties of source objects into the destination object', () => {
    const object = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };
    const source = {
      'a': [{ 'c': 3 }, { 'e': 5 }]
    };
    expect(merge(object, source)).toEqual({
      'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }]
    });
  });

  test('should overwrite simple properties', () => {
    const object = { 'a': 1, 'b': 2 };
    const source = { 'b': 3, 'c': 4 };
    expect(merge(object, source)).toEqual({ 'a': 1, 'b': 3, 'c': 4 });
  });

  test('should deeply merge objects', () => {
    const object = { 'a': { 'b': 1 } };
    const source = { 'a': { 'c': 2 } };
    expect(merge(object, source)).toEqual({ 'a': { 'b': 1, 'c': 2 } });
  });

  test('should handle multiple source objects', () => {
    const object = { 'a': 1 };
    const source1 = { 'b': 2 };
    const source2 = { 'c': 3 };
    expect(merge(object, source1, source2)).toEqual({ 'a': 1, 'b': 2, 'c': 3 });
  });

  test('should modify the original object', () => {
    const object = { 'a': 1 };
    const result = merge(object, { 'b': 2 });
    expect(result).toBe(object);
  });

  test('should handle arrays by merging elements if they are objects', () => {
    const object = { 'a': [{ 'b': 1 }] };
    const source = { 'a': [{ 'c': 2 }] };
    expect(merge(object, source)).toEqual({ 'a': [{ 'b': 1, 'c': 2 }] });
  });

  test('should replace arrays if source is not an object', () => {
    const object = { 'a': [1, 2] };
    const source = { 'a': [3] };
    expect(merge(object, source)).toEqual({ 'a': [3] });
  });
});