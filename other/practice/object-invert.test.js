const objectInvert = require('./object-invert');

test('inverts object keys and values', () => {
  const obj = { a: 1, b: 2, c: 1 };
  expect(objectInvert(obj)).toEqual({ '1': 'c', '2': 'b' }); // Note: 'c' overwrites 'a' for key '1' usually, or order dependent. JS object keys order for integers is specific, but generally later overwrites earlier.
});

test('handles strings as values', () => {
  expect(objectInvert({ x: 'y', z: 'w' })).toEqual({ y: 'x', w: 'z' });
});
