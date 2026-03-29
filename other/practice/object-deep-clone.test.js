import { deepClone } from './object-deep-clone.js';
describe('deepClone', () => {
  it('should deeply clone an object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone.b).not.toBe(obj.b);
  });
});
