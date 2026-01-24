const { pick } = require('./object-picker');

describe('pick', () => {
  const obj = {
    a: 1,
    b: '2',
    c: true,
    d: { nested: 'object' },
  };

  it('should pick specified keys from an object', () => {
    const picked = pick(obj, ['a', 'c']);
    expect(picked).toEqual({ a: 1, c: true });
  });

  it('should handle a single key as a string', () => {
    const picked = pick(obj, 'b');
    expect(picked).toEqual({ b: '2' });
  });

  it('should return an empty object if no keys are specified', () => {
    const picked = pick(obj, []);
    expect(picked).toEqual({});
  });

  it('should ignore keys that do not exist in the source object', () => {
    const picked = pick(obj, ['a', 'e']);
    expect(picked).toEqual({ a: 1 });
  });

  it('should return an empty object for invalid input', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
    expect(pick(123, ['a'])).toEqual({});
  });

  it('should handle nested objects', () => {
    const picked = pick(obj, 'd');
    expect(picked).toEqual({ d: { nested: 'object' } });
  });
  
  it('should not mutate the original object', () => {
    const original = { x: 10, y: 20 };
    pick(original, 'x');
    expect(original).toEqual({ x: 10, y: 20 });
  });
});