const { deepDiff } = require('./object-deep-diff');

describe('deepDiff', () => {
  const base = {
    a: 1,
    b: 'hello',
    c: {
      d: 2,
      e: {
        f: 'world',
      },
      g: [1, 2],
    },
    h: 'exists',
  };

  it('should return an empty object for identical objects', () => {
    const compared = JSON.parse(JSON.stringify(base));
    expect(deepDiff(base, compared)).toEqual({});
  });

  it('should detect added properties', () => {
    const compared = { ...base, i: 'new' };
    expect(deepDiff(base, compared)).toEqual({ i: 'new' });
  });

  it('should detect deleted properties', () => {
    const compared = { a: 1, b: 'hello', c: base.c };
    // The property 'h' is removed in 'compared'
    expect(deepDiff(base, compared)).toEqual({ h: undefined });
  });

  it('should detect changed properties', () => {
    const compared = { ...base, a: 2 };
    expect(deepDiff(base, compared)).toEqual({ a: 2 });
  });

  it('should detect nested added properties', () => {
    const compared = JSON.parse(JSON.stringify(base));
    compared.c.e.j = 'new nested';
    expect(deepDiff(base, compared)).toEqual({ c: { e: { j: 'new nested' } } });
  });

  it('should detect nested deleted properties', () => {
    const compared = JSON.parse(JSON.stringify(base));
    delete compared.c.d;
    expect(deepDiff(base, compared)).toEqual({ c: { d: undefined } });
  });

  it('should detect nested changed properties', () => {
    const compared = JSON.parse(JSON.stringify(base));
    compared.c.e.f = 'monde';
    expect(deepDiff(base, compared)).toEqual({ c: { e: { f: 'monde' } } });
  });
  
  it('should handle non-object inputs gracefully', () => {
    expect(deepDiff(null, {})).toEqual({});
    expect(deepDiff({}, null)).toEqual({});
    expect(deepDiff([], {})).toEqual({});
    expect(deepDiff(1, 2)).toEqual({});
  });
});
