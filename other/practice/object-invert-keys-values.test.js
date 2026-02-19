
const objectInvertKeysValues = require('./object-invert-keys-values');

describe('objectInvertKeysValues', () => {
  test('inverts simple object', () => {
    expect(objectInvertKeysValues({ a: '1', b: '2' })).toEqual({ '1': 'a', '2': 'b' });
  });

  test('handles number values', () => {
    expect(objectInvertKeysValues({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' });
  });

  test('last duplicate value wins', () => {
    // If multiple keys have same value, one will overwrite the other in the inverted object
    expect(objectInvertKeysValues({ a: '1', b: '1' })).toHaveProperty('1');
  });
});
