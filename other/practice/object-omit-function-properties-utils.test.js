const omitFunctionProperties = require('./object-omit-function-properties-utils').default;

describe('omitFunctionProperties', () => {
  test('should omit only function properties from an object', () => {
    const func1 = () => {};
    const func2 = function () {};
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: { key: 'value' },
      h: [1, 2],
      i: func1,
      j: func2,
      k: Math.random, // Built-in function
    };
    expect(omitFunctionProperties(obj)).toEqual({
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: { key: 'value' },
      h: [1, 2],
    });
  });

  test('should return the original object if no function properties exist', () => {
    const obj = {
      a: 1,
      b: true,
      c: 'hello',
      d: 0,
      e: null,
      f: undefined,
      g: {},
      h: [1, 2],
    };
    expect(omitFunctionProperties(obj)).toEqual(obj);
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    expect(omitFunctionProperties(obj)).toEqual({});
  });

  test('should return an empty object if the input object is null or undefined', () => {
    expect(omitFunctionProperties(null)).toEqual({});
    expect(omitFunctionProperties(undefined)).toEqual({});
  });

  test('should handle an object with only function properties', () => {
    const funcA = () => 'a';
    const funcB = function () {
      return 'b';
    };
    const obj = { methodA: funcA, methodB: funcB };
    expect(omitFunctionProperties(obj)).toEqual({});
  });

  test('should not modify the original object', () => {
    const originalFunc = () => {};
    const originalObj = { a: originalFunc, b: 'text', c: 123 };
    omitFunctionProperties(originalObj);
    expect(originalObj).toEqual({ a: originalFunc, b: 'text', c: 123 });
  });
});