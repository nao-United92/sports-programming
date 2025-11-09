const { cloneDeep } = require('./object-clone-utils');

describe('cloneDeep', () => {
  test('should return primitive values as is', () => {
    expect(cloneDeep(1)).toBe(1);
    expect(cloneDeep('hello')).toBe('hello');
    expect(cloneDeep(true)).toBe(true);
    expect(cloneDeep(null)).toBeNull();
    expect(cloneDeep(undefined)).toBeUndefined();
  });

  test('should deep clone arrays', () => {
    const arr = [1, 2, { a: 3 }];
    const clonedArr = cloneDeep(arr);

    expect(clonedArr).toEqual(arr); // Content should be the same
    expect(clonedArr).not.toBe(arr); // Reference should be different
    expect(clonedArr[2]).not.toBe(arr[2]); // Nested object reference should be different
  });

  test('should deep clone objects', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = cloneDeep(obj);

    expect(clonedObj).toEqual(obj); // Content should be the same
    expect(clonedObj).not.toBe(obj); // Reference should be different
    expect(clonedObj.b).not.toBe(obj.b); // Nested object reference should be different
  });

  test('should deep clone nested arrays and objects', () => {
    const original = {
      a: 1,
      b: [
        { c: 2, d: [3, 4] },
        { e: 5 },
      ],
      f: { g: { h: 6 } },
    };
    const cloned = cloneDeep(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
    expect(cloned.b[0]).not.toBe(original.b[0]);
    expect(cloned.b[0].d).not.toBe(original.b[0].d);
    expect(cloned.f).not.toBe(original.f);
    expect(cloned.f.g).not.toBe(original.f.g);
  });

  test('should not be affected by changes to the original object', () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = cloneDeep(original);

    original.a = 100;
    original.b.c = 200;
    original.b.d = 300;

    expect(cloned.a).toBe(1);
    expect(cloned.b.c).toBe(2);
    expect(cloned.b.d).toBeUndefined();
  });

  test('should handle Date objects (shallow copy for now)', () => {
    const date = new Date();
    const obj = { d: date };
    const cloned = cloneDeep(obj);
    expect(cloned.d).toBe(date); // Reference should be the same with current implementation
  });
});
