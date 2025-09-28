
import { omit } from './object-omit-utils';

describe('omit', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('should create an object without the omitted properties', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('should not modify the original object', () => {
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: '2', c: 3 });
  });

  test('should return an identical object if no properties are omitted', () => {
    expect(omit(obj, [])).toEqual(obj);
  });

  test('should handle paths that do not exist on the object', () => {
    expect(omit(obj, ['d', 'e'])).toEqual(obj);
  });
});
