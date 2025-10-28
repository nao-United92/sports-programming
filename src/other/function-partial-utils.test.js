import { partial } from './function-partial-utils';

describe('partial', () => {
  const add = (a, b, c) => a + b + c;
  const greet = (greeting, name) => `${greeting}, ${name}!`;

  it('should partially apply arguments to a function', () => {
    const add5 = partial(add, 5);
    expect(add5(1, 2)).toBe(8); // 5 + 1 + 2

    const add5and10 = partial(add, 5, 10);
    expect(add5and10(2)).toBe(17); // 5 + 10 + 2
  });

  it('should return a function that can be called with remaining arguments', () => {
    const sayHello = partial(greet, 'Hello');
    expect(sayHello('John')).toBe('Hello, John!');

    const sayHiToJohn = partial(greet, 'Hi', 'John');
    expect(sayHiToJohn()).toBe('Hi, John!');
  });

  it('should maintain the `this` context', () => {
    const obj = {
      x: 10,
      addX: function(a, b) {
        return this.x + a + b;
      },
    };

    const addXand5 = partial(obj.addX, 5);
    expect(addXand5.call(obj, 1, 2)).toBe(18); // 10 + 5 + 1 + 2
  });

  it('should work with no partial arguments', () => {
    const addAll = partial(add);
    expect(addAll(1, 2, 3)).toBe(6);
  });

  it('should throw an error if func is not a function', () => {
    expect(() => partial(null, 1)).toThrow('Expected a function');
    expect(() => partial('not a function', 1)).toThrow('Expected a function');
  });
});
