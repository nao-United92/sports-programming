import { objectOmit } from './object-omit-utils';

describe('objectOmit', () => {
  test('omits specified keys from object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectOmit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('does nothing if keys are not in object', () => {
    const obj = { a: 1, b: 2 };
    expect(objectOmit(obj, ['z'])).toEqual({ a: 1, b: 2 });
  });

  test('returns empty object if input is null', () => {
    expect(objectOmit(null, ['a'])).toEqual({});
  });
});
