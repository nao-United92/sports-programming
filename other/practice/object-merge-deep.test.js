import { mergeDeep } from './object-merge-deep.js';

describe('mergeDeep', () => {
  test('should deeply merge two objects', () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { b: { d: 3 }, e: 4 };
    const result = mergeDeep(target, source);
    expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 });
  });

  test('should overwrite primitive values', () => {
    const target = { a: 1 };
    const source = { a: 2 };
    expect(mergeDeep(target, source)).toEqual({ a: 2 });
  });

  test('should handle null values', () => {
    const target = { a: 1 };
    const source = { a: null };
    expect(mergeDeep(target, source)).toEqual({ a: null });
  });
});
