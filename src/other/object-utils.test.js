
describe('clone', () => {
  test('should shallow clone a simple object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = clone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).toBe(obj.b); // Shallow clone, so nested objects are same reference
  });

  test('should shallow clone an array', () => {
    const arr = [1, { a: 2 }, [3, 4]];
    const clonedArr = clone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).toBe(arr[1]); // Shallow clone, so nested objects are same reference
    expect(clonedArr[2]).toBe(arr[2]); // Shallow clone, so nested arrays are same reference
  });

  test('should handle null and non-object values', () => {
    expect(clone(null)).toBe(null);
    expect(clone(123)).toBe(123);
    expect(clone('string')).toBe('string');
  });
});
