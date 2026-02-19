
const objectDeepCloneSimple = require('./object-deep-clone-simple');

describe('objectDeepCloneSimple', () => {
  test('clones a simple object', () => {
    const obj = { a: 1, b: 2 };
    const clone = objectDeepCloneSimple(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
  });

  test('deep clones nested objects', () => {
    const obj = { a: { b: 2 } };
    const clone = objectDeepCloneSimple(obj);
    expect(clone).toEqual(obj);
    expect(clone.a).not.toBe(obj.a);
  });

  test('clones arrays', () => {
    const arr = [1, [2]];
    const clone = objectDeepCloneSimple(arr);
    expect(clone).toEqual(arr);
    expect(clone[1]).not.toBe(arr[1]);
  });
});
