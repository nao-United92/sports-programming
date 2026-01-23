import { partial } from './function-partial-utils.js';

describe('partial', () => {
  it('should apply partial arguments to a function', () => {
    const sum = (a, b, c) => a + b + c;
    const add5 = partial(sum, 5);

    expect(add5(1, 2)).toBe(8); // 5 + 1 + 2
    expect(add5(10, 20)).toBe(35); // 5 + 10 + 20
  });

  it('should prepend partial arguments to the received arguments', () => {
    const greet = (greeting, name, punctuation) => `${greeting}, ${name}${punctuation}`;
    const sayHelloTo = partial(greet, 'Hello');

    expect(sayHelloTo('Alice', '!')).toBe('Hello, Alice!');
    expect(sayHelloTo('Bob', '.')).toBe('Hello, Bob.');
  });

  it('should preserve `this` context', () => {
    const obj = {
      value: 10,
      add: function(a, b) {
        return this.value + a + b;
      },
    };
    const add5ToValue = partial(obj.add, 5);

    const result = add5ToValue.call({ value: 100 }, 10);
    expect(result).toBe(115); // 100 (this.value) + 5 (partial) + 10 (rest)
  });

  it('should work with no additional arguments', () => {
    const sayHi = jest.fn((name) => `Hi ${name}`);
    const greetAlice = partial(sayHi, 'Alice');

    expect(greetAlice()).toBe('Hi Alice');
    expect(sayHi).toHaveBeenCalledWith('Alice');
  });

  it('should handle functions with fewer arguments than partial arguments', () => {
    const logTwoArgs = jest.fn((a, b) => `a: ${a}, b: ${b}`);
    const partialLogger = partial(logTwoArgs, 'first', 'second', 'third');

    expect(partialLogger()).toBe('a: first, b: second');
    expect(logTwoArgs).toHaveBeenCalledWith('first', 'second');
  });
});
