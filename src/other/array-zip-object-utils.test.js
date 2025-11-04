
import { zipObject } from './array-zip-object-utils.js';

describe('zipObject', () => {
  test('should create an object from two arrays', () => {
    const props = ['a', 'b'];
    const values = [1, 2];
    expect(zipObject(props, values)).toEqual({ a: 1, b: 2 });
  });

  test('should ignore extra values if props array is shorter', () => {
    const props = ['a'];
    const values = [1, 2];
    expect(zipObject(props, values)).toEqual({ a: 1 });
  });

  test('should assign undefined for values if values array is shorter', () => {
    const props = ['a', 'b'];
    const values = [1];
    expect(zipObject(props, values)).toEqual({ a: 1, b: undefined });
  });

  test('should return an empty object if props array is empty', () => {
    expect(zipObject([], [1, 2])).toEqual({});
  });

  test('should handle empty arrays', () => {
    expect(zipObject([], [])).toEqual({});
  });
});
