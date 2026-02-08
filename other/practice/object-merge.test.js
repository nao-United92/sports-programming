import { merge } from './object-merge.js';

describe('merge', () => {
  it('should merge two objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const expected = { a: 1, b: 2, c: 3, d: 4 };
    expect(merge(obj1, obj2)).toEqual(expected);
  });

  it('should overwrite properties from the first object with properties from the second', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const expected = { a: 1, b: 3, c: 4 };
    expect(merge(obj1, obj2)).toEqual(expected);
  });

  it('should handle merging with an empty object', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = {};
    expect(merge(obj1, obj2)).toEqual(obj1);
    expect(merge(obj2, obj1)).toEqual(obj1);
  });
});
