import { keyBy } from './array-keyby-utils';

describe('keyBy', () => {
  const array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
  ];

  it('should create an object keyed by a property name', () => {
    const result = keyBy(array, 'dir');
    expect(result).toEqual({
      'left': { 'dir': 'left', 'code': 97 },
      'right': { 'dir': 'right', 'code': 100 }
    });
  });

  it('should create an object keyed by the result of a function', () => {
    const result = keyBy(array, (o) => String.fromCharCode(o.code));
    expect(result).toEqual({
      'a': { 'dir': 'left', 'code': 97 },
      'd': { 'dir': 'right', 'code': 100 }
    });
  });

  it('should handle an empty array', () => {
    expect(keyBy([], 'key')).toEqual({});
  });

  it('should overwrite keys if duplicates are generated', () => {
    const arrayWithDup = [
      { 'dir': 'left', 'code': 1 },
      { 'dir': 'left', 'code': 2 }
    ];
    const result = keyBy(arrayWithDup, 'dir');
    expect(result).toEqual({ 'left': { 'dir': 'left', 'code': 2 } });
  });
});
