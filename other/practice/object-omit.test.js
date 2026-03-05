const omit = require('./object-omit');

describe('omit', () => {
  const obj = { a: 1, b: '2', c: 3 };

  test('omits specified keys from the object', () => {
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
  });

  test('omits multiple keys', () => {
    expect(omit(obj, ['a', 'c'])).toEqual({ b: '2' });
  });

  test('ignores keys that do not exist', () => {
    expect(omit(obj, ['d'])).toEqual(obj);
  });

  test('returns the original object (as a copy) if no keys are omitted', () => {
    expect(omit(obj, [])).toEqual(obj);
  });
});
