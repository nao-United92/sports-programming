import { objectOmit } from './object-omit';

test('objectOmit removes specified keys', () => {
  const obj = { a: 1, b: 2, c: 3 };
  expect(objectOmit(obj, ['b'])).toEqual({ a: 1, c: 3 });
  expect(objectOmit(obj, ['a', 'c'])).toEqual({ b: 2 });
});
