import { pick } from './object-pick';

describe('pick', () => {
  test('picks specified keys from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  test('returns an empty object if no keys are found', () => {
    const obj = { a: 1 };
    expect(pick(obj, ['b'])).toEqual({});
  });

  test('handles non-existent keys gracefully', () => {
    const obj = { a: 1, b: 2 };
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1 });
  });
});
