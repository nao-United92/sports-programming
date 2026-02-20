import { deepClone } from './object-deep-clone';

describe('deepClone', () => {
  test('clones primitive values', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('s')).toBe('s');
    expect(deepClone(null)).toBe(null);
  });

  test('clones objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
  });

  test('clones arrays', () => {
    const arr = [1, [2, 3]];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
  });
});
