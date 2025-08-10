import { pick } from './pick-utils';

describe('pick', () => {
  const obj = { a: 1, b: '2', c: true, d: { nested: 1 } };

  test('should return an empty object if source object is null or undefined', () => {
    expect(pick(null, ['a'])).toEqual({});
    expect(pick(undefined, ['a'])).toEqual({});
  });

  test('should return an empty object if keys are not provided', () => {
    expect(pick(obj, [])).toEqual({});
    expect(pick(obj)).toEqual({});
  });

  test('should pick specified properties from an object', () => {
    expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: true });
  });

  test('should handle a single key as a string', () => {
    expect(pick(obj, 'b')).toEqual({ b: '2' });
  });

  test('should ignore keys that do not exist in the source object', () => {
    expect(pick(obj, ['a', 'e'])).toEqual({ a: 1 });
  });

  test('should not pick inherited properties', () => {
    const proto = { inherited: 'should not be picked' };
    const child = Object.create(proto);
    child.own = 'should be picked';
    expect(pick(child, ['own', 'inherited'])).toEqual({ own: 'should be picked' });
  });

  test('should return a new object', () => {
    const picked = pick(obj, ['a']);
    expect(picked).not.toBe(obj);
  });

  test('should handle nested objects (shallow pick)', () => {
    const picked = pick(obj, ['d']);
    expect(picked).toEqual({ d: { nested: 1 } });
    expect(picked.d).toBe(obj.d); // Check that it's a shallow copy
  });
});
