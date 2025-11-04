
import { mergeWith } from './object-merge-with-utils.js';

describe('mergeWith', () => {
  test('should merge properties using a customizer', () => {
    function customizer(objValue, srcValue) {
      if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    }
    const object = { 'a': [1], 'b': 2 };
    const source = { 'a': [3], 'b': 4 };
    expect(mergeWith(object, source, customizer)).toEqual({ 'a': [1, 3], 'b': 4 });
  });

  test('should fall back to default merge if customizer returns undefined', () => {
    function customizer(objValue, srcValue) {
      if (typeof objValue === 'string') {
        return objValue + srcValue;
      }
    }
    const object = { 'a': 'hello', 'b': { 'c': 1 } };
    const source = { 'a': ' world', 'b': { 'd': 2 } };
    expect(mergeWith(object, source, customizer)).toEqual({ 'a': 'hello world', 'b': { 'c': 1, 'd': 2 } });
  });

  test('should pass all arguments to the customizer', () => {
    const customizer = jest.fn();
    const object = { 'a': 1 };
    const source = { 'a': 2 };
    mergeWith(object, source, customizer);
    expect(customizer).toHaveBeenCalledWith(1, 2, 'a', object, source);
  });

  test('should handle multiple source objects with customizer', () => {
    function customizer(objValue, srcValue) {
      if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    }
    const object = { 'a': [1] };
    const source1 = { 'a': [2], 'b': 1 };
    const source2 = { 'a': [3], 'b': 2 };
    expect(mergeWith(object, source1, source2, customizer)).toEqual({ 'a': [1, 2, 3], 'b': 2 });
  });
});
