import { pick } from './pick-utils';

describe('pick', () => {
  test('should pick specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const picked = pick(obj, ['a', 'c']);
    expect(picked).toEqual({ a: 1, c: 3 });
  });

  test('should not include keys that are not in the object', () => {
    const obj = { a: 1, b: 2 };
    const picked = pick(obj, ['a', 'd']);
    expect(picked).toEqual({ a: 1 });
  });

  test('should return an empty object if no keys are specified', () => {
    const obj = { a: 1, b: 2 };
    const picked = pick(obj, []);
    expect(picked).toEqual({});
  });

  test('should return an empty object if the input object is empty', () => {
    const obj = {};
    const picked = pick(obj, ['a', 'b']);
    expect(picked).toEqual({});
  });
});