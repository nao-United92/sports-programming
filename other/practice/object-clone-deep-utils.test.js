const { cloneDeep } = require('./object-clone-deep-utils');

describe('cloneDeep', () => {
  it('should clone an object with nested properties', () => {
    const original = { a: 1, b: { c: 2, d: [3, 4] } };
    const cloned = cloneDeep(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.b).not.toBe(original.b);
    expect(cloned.b.d).not.toBe(original.b.d);
  });

  it('should clone an array with nested structures', () => {
    const original = [1, { a: 2 }, [3, { b: 4 }]];
    const cloned = cloneDeep(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned[1]).not.toBe(original[1]);
    expect(cloned[2]).not.toBe(original[2]);
    expect(cloned[2][1]).not.toBe(original[2][1]);
  });

  it('should handle primitives', () => {
    expect(cloneDeep(123)).toBe(123);
    expect(cloneDeep('hello')).toBe('hello');
    expect(cloneDeep(null)).toBe(null);
    expect(cloneDeep(undefined)).toBe(undefined);
  });
  
  it('should handle dates', () => {
    const original = { date: new Date() };
    const cloned = cloneDeep(original);
    expect(cloned.date.getTime()).toBe(original.date.getTime());
    expect(cloned.date).not.toBe(original.date);
  });

  it('should handle regular expressions', () => {
    const original = { re: /abc/gi };
    const cloned = cloneDeep(original);
    expect(cloned.re).toEqual(original.re);
    expect(cloned.re).not.toBe(original.re);
  });
  
  it('should handle cyclic references', () => {
    const original = { a: 1 };
    original.b = original; // Cyclic reference

    const cloned = cloneDeep(original);

    expect(cloned.a).toBe(1);
    expect(cloned.b).toBe(cloned);
    expect(cloned).not.toBe(original);
  });
});
