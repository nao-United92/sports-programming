import { pick, omit } from './object-pick-omit-utils';

describe('pick', () => {
  test('should pick specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('should return an empty object if no keys are specified', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, [])).toEqual({});
  });

  test('should ignore keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1 });
  });

  test('should handle objects with inherited properties', () => {
    const proto = { inherited: 'value' };
    const obj = Object.create(proto);
    obj.own = 'property';
    expect(pick(obj, ['own', 'inherited'])).toEqual({ own: 'property' });
  });
});

describe('omit', () => {
  test('should omit specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should return the original object if no keys are specified', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, [])).toEqual({ a: 1, b: 2 });
  });

  test('should ignore keys that do not exist in the object', () => {
    const obj = { a: 1, b: 2 };
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('should handle objects with inherited properties', () => {
    const proto = { inherited: 'value' };
    const obj = Object.create(proto);
    obj.own = 'property';
    expect(omit(obj, ['inherited'])).toEqual({ own: 'property' });
  });
});
