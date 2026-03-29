import { getByPath } from './object-get-by-path.js';
describe('getByPath', () => {
  it('should get value by path', () => {
    const obj = { a: { b: { c: 1 } } };
    expect(getByPath(obj, 'a.b.c')).toBe(1);
    expect(getByPath(obj, 'a[b][c]')).toBe(1);
  });
});
