const { deepClone } = require('./object-deep-copier.js');

describe('deepClone', () => {
  test('should deeply clone a primitive value', () => {
    expect(deepClone(10)).toBe(10);
    expect(deepClone('hello')).toBe('hello');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('should deeply clone a simple object', () => {
    const obj = { a: 1, b: 'test' };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test('should deeply clone a nested object', () => {
    const obj = { a: 1, b: { c: 2, d: 'nested' } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.b).not.toBe(obj.b); // Check nested object reference
  });

  test('should deeply clone an array', () => {
    const arr = [1, 'test', { a: 2 }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[2]).not.toBe(arr[2]); // Check nested object reference
  });

  test('should deeply clone a nested array', () => {
    const arr = [1, [2, { a: 3 }], 4];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr[1]).not.toBe(arr[1]);
    expect(clonedArr[1][1]).not.toBe(arr[1][1]);
  });

  test('should handle circular references', () => {
    const obj = {};
    obj.a = obj; // Circular reference
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
    expect(clonedObj.a).toBe(clonedObj); // Cloned circular reference should point to the cloned object
  });

  test('should clone Date objects', () => {
    const date = new Date();
    const obj = { d: date };
    const clonedObj = deepClone(obj);
    expect(clonedObj.d).toEqual(date);
    expect(clonedObj.d).not.toBe(date);
  });

  test('should clone RegExp objects', () => {
    const regex = /abc/gi;
    const obj = { r: regex };
    const clonedObj = deepClone(obj);
    expect(clonedObj.r).toEqual(regex);
    expect(clonedObj.r).not.toBe(regex);
  });

  test('should handle functions (return reference)', () => {
    const func = () => console.log('test');
    const obj = { f: func };
    const clonedObj = deepClone(obj);
    expect(clonedObj.f).toBe(func); // Functions are usually not cloned, but copied by reference
  });

  test('should handle complex mixed data structures', () => {
    const func = () => {};
    const regex = /xyz/i;
    const date = new Date();
    const original = {
      str: 'text',
      num: 123,
      bool: true,
      arr: [1, { key: 'value', nestedArr: [7, 8] }],
      obj: { nested: 'obj', innerArr: [true, false] },
      fn: func,
      reg: regex,
      dt: date,
    };

    original.circular = original; // Introduce circularity

    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);

    expect(cloned.arr).not.toBe(original.arr);
    expect(cloned.arr[1]).not.toBe(original.arr[1]);
    expect(cloned.arr[1].nestedArr).not.toBe(original.arr[1].nestedArr);

    expect(cloned.obj).not.toBe(original.obj);
    expect(cloned.obj.innerArr).not.toBe(original.obj.innerArr);

    expect(cloned.fn).toBe(original.fn); // Function reference preserved
    expect(cloned.reg).not.toBe(original.reg); // RegExp cloned
    expect(cloned.dt).not.toBe(original.dt); // Date cloned

    expect(cloned.circular).toBe(cloned); // Circular reference points to clone
  });
});
