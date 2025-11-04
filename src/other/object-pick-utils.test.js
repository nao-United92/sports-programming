import { pick } from './object-pick-utils.js';

describe('pick', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 };

  test('should pick specified properties', () => {
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  test('should work with a single property path', () => {
    expect(pick(object, 'a')).toEqual({ 'a': 1 });
  });

  test('should return an empty object if no properties are picked', () => {
    expect(pick(object, ['d', 'e'])).toEqual({});
  });

  test('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, 'a')).toEqual({});
  });

  test('should not pick inherited properties', () => {
    const proto = { 'd': 4 };
    const objWithProto = Object.create(proto);
    objWithProto.a = 1;
    expect(pick(objWithProto, ['a', 'd'])).toEqual({ 'a': 1 });
  });
});