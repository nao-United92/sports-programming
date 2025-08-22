import { invoke } from './collection-invoke-utils';

describe('invoke', () => {
  const object = {
    a: {
      b: () => 'hello',
      c: (name) => `hello ${name}`,
    },
    d: 'not a function',
  };

  it('should invoke a method at a given path', () => {
    expect(invoke(object, 'a.b')).toBe('hello');
  });

  it('should pass arguments to the invoked method', () => {
    expect(invoke(object, 'a.c', 'world')).toBe('hello world');
  });

  it('should return undefined if the path does not lead to a function', () => {
    expect(invoke(object, 'd')).toBeUndefined();
    expect(invoke(object, 'a.e')).toBeUndefined();
  });

  it('should handle null or undefined collection', () => {
    expect(invoke(null, 'a.b')).toBeUndefined();
    expect(invoke(undefined, 'a.b')).toBeUndefined();
  });

  it('should invoke a function directly if path is a function', () => {
    const mockFn = jest.fn(() => 'direct call');
    expect(invoke(object, mockFn)).toBe('direct call');
    expect(mockFn).toHaveBeenCalled();
  });
});
