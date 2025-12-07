const pick = require('./object-pick-utils');

test('picks specified keys from an object', () => {
  const obj = { 'a': 1, 'b': '2', 'c': 3 };
  expect(pick(obj, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
});

test('handles keys that do not exist in the object', () => {
  const obj = { 'a': 1, 'b': '2' };
  expect(pick(obj, ['a', 'd'])).toEqual({ 'a': 1 });
});

test('handles an empty keys array', () => {
  const obj = { 'a': 1, 'b': '2' };
  expect(pick(obj, [])).toEqual({});
});

test('handles a null or undefined object', () => {
  expect(pick(null, ['a', 'b'])).toEqual({});
  expect(pick(undefined, ['a', 'b'])).toEqual({});
});

test('does not pick properties from the prototype chain', () => {
    function MyObject() {
        this.a = 1;
    }
    MyObject.prototype.b = 2;
    const obj = new MyObject();
    expect(pick(obj, ['a', 'b'])).toEqual({ 'a': 1 });
});
