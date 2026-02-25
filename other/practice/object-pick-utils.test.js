import { objectPick } from './object-pick-utils';

describe('objectPick', () => {
  test('picks specified keys from object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectPick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('ignores keys not in object', () => {
    const obj = { a: 1, b: 2 };
    expect(objectPick(obj, ['a', 'z'])).toEqual({ a: 1 });
  });

  test('returns empty object if input is not object', () => {
    expect(objectPick(null, ['a'])).toEqual({});
  });
});
