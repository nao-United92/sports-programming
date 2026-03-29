import { mergeDeep } from './object-merge-deep.js';
describe('mergeDeep', () => {
  it('should merge objects deeply', () => {
    const t = { a: 1 };
    const s = { b: { c: 2 } };
    expect(mergeDeep(t, s)).toEqual({ a: 1, b: { c: 2 } });
  });
});
