import { objectIsEmptyCheck } from './object-is-empty-check';

test('objectIsEmptyCheck checks for empty object', () => {
  expect(objectIsEmptyCheck({})).toBe(true);
  expect(objectIsEmptyCheck({ a: 1 })).toBe(false);
  expect(objectIsEmptyCheck(null)).toBe(true);
  expect(objectIsEmptyCheck(undefined)).toBe(true);
});
