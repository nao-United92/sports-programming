import { isEmpty } from './object-is-empty';

describe('isEmpty', () => {
  test('returns true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('returns false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('returns true for an object with no own properties', () => {
    const obj = Object.create({ a: 1 });
    expect(isEmpty(obj)).toBe(true);
  });
});
