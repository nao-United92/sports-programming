const pick = require('./object-pick-utils');

describe('pick', () => {
  const obj = { 'a': 1, 'b': '2', 'c': 3, 'd': { e: 4 } };

  test('should return an empty object if the source object is null or undefined', () => {
    expect(pick(null, ['a', 'b'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  test('should pick specified properties from an object', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  test('should work with a single key provided as a string', () => {
    expect(pick(obj, 'b')).toEqual({ 'b': '2' });
  });

  test('should ignore keys that do not exist in the source object', () => {
    expect(pick(obj, ['a', 'f'])).toEqual({ 'a': 1 });
  });

  test('should return an empty object if no keys are provided', () => {
    expect(pick(obj, [])).toEqual({});
  });
  
  test('should return an empty object if no matching keys are found', () => {
    expect(pick(obj, ['x', 'y'])).toEqual({});
  });
  
  test('should not pick properties from the prototype chain', () => {
    const proto = { 'inherited': 'value' };
    const child = Object.create(proto);
    child.own = 'ownValue';
    
    expect(pick(child, ['own', 'inherited'])).toEqual({ 'own': 'ownValue' });
  });

  test('should pick nested objects by reference', () => {
    const result = pick(obj, ['d']);
    expect(result.d).toEqual({ e: 4 });
    // Check that it's a reference, not a deep clone
    expect(result.d).toBe(obj.d);
  });
});