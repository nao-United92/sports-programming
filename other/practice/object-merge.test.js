import { merge } from './object-merge';

describe('merge', () => {
  test('merges two objects', () => {
    expect(merge({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  test('overwrites properties from the first object with the second', () => {
    expect(merge({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('returns a new object', () => {
    const obj1 = { a: 1 };
    const result = merge(obj1, { b: 2 });
    expect(result).not.toBe(obj1);
  });
});
