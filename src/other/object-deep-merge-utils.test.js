import { deepMerge } from './object-deep-merge-utils';

describe('deepMerge', () => {
  test('should merge simple objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  test('should overwrite properties with the same name', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('should deep merge nested objects', () => {
    const obj1 = { a: { b: 1 } };
    const obj2 = { a: { c: 2 } };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: { b: 1, c: 2 } });
  });

  test('should handle multiple source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };
    const result = deepMerge({}, obj1, obj2, obj3);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should handle deeply nested objects with overwrites', () => {
    const obj1 = { a: { b: { c: 1, d: 2 } } };
    const obj2 = { a: { b: { c: 3, e: 4 } } };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: { b: { c: 3, d: 2, e: 4 } } });
  });

  test('should merge arrays by concatenating them', () => {
    const obj1 = { a: [1, 2] };
    const obj2 = { a: [3, 4] };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: [1, 2, 3, 4] });
  });

  test('should handle arrays in nested objects', () => {
    const obj1 = { a: { b: [1, 2] } };
    const obj2 = { a: { b: [3, 4] } };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: { b: [1, 2, 3, 4] } });
  });

  test('should handle different data types correctly', () => {
    const obj1 = { a: 1, b: 'hello', c: true, d: null };
    const obj2 = { a: 2, b: 'world', c: false, e: undefined };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: 2, b: 'world', c: false, d: null, e: undefined });
  });

  test('should not modify the original objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { d: 3, b: { e: 4 } };
    const originalObj1 = JSON.parse(JSON.stringify(obj1));
    const originalObj2 = JSON.parse(JSON.stringify(obj2));

    deepMerge({}, obj1, obj2);

    expect(obj1).toEqual(originalObj1);
    expect(obj2).toEqual(originalObj2);
  });

  test('should return target if no sources are provided', () => {
    const obj1 = { a: 1 };
    const result = deepMerge(obj1);
    expect(result).toBe(obj1);
  });

  test('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = { a: 1 };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: 1 });
  });

  test('should handle null or undefined values for non-object properties', () => {
    const obj1 = { a: 1, b: null };
    const obj2 = { b: undefined, c: 3 };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ a: 1, b: undefined, c: 3 });
  });

  test('should correctly merge objects with properties that are arrays and then objects', () => {
    const obj1 = { data: [1, 2] };
    const obj2 = { data: { key: 'value' } };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ data: { key: 'value' } }); // Object overwrites array
  });

  test('should correctly merge objects with properties that are objects and then arrays', () => {
    const obj1 = { data: { key: 'value' } };
    const obj2 = { data: [1, 2] };
    const result = deepMerge({}, obj1, obj2);
    expect(result).toEqual({ data: [1, 2] }); // Array overwrites object
  });
});
