
const objectFilterByValue = require('./object-filter-by-value');

describe('objectFilterByValue', () => {
  test('filters object properties by numeric value', () => {
    const data = { a: 1, b: 2, c: 3, d: 4 };
    const result = objectFilterByValue(data, (val) => val > 2);
    expect(result).toEqual({ c: 3, d: 4 });
  });

  test('filters object properties by string value', () => {
    const data = { name: 'Alice', role: 'admin', active: 'yes' };
    const result = objectFilterByValue(data, (val) => val.startsWith('a'));
    expect(result).toEqual({ role: 'admin' });
  });

  test('returns empty object if no match', () => {
    const data = { a: 1 };
    const result = objectFilterByValue(data, (val) => val > 10);
    expect(result).toEqual({});
  });
});
