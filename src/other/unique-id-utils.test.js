// Since uniqueId maintains a module-level state, we need to use jest.isolateModules
// to ensure each test gets a fresh instance of the module, resetting the counter.

describe('uniqueId', () => {
  let uniqueId;

  beforeEach(() => {
    // Reset modules to get a fresh idCounter for each test
    jest.resetModules();
    uniqueId = require('./unique-id-utils').uniqueId;
  });

  test('should return a unique ID as a string each time', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    expect(id1).toBe('1');
    expect(id2).toBe('2');
    expect(id1).not.toBe(id2);
  });

  test('should correctly apply a prefix', () => {
    const id1 = uniqueId('user_');
    const id2 = uniqueId('user_');
    expect(id1).toBe('user_1');
    expect(id2).toBe('user_2');
  });

  test('should increment the same counter regardless of prefix', () => {
    const id1 = uniqueId('contact_'); // counter = 1
    const id2 = uniqueId('item_');    // counter = 2
    const id3 = uniqueId();           // counter = 3

    expect(id1).toBe('contact_1');
    expect(id2).toBe('item_2');
    expect(id3).toBe('3');
  });

  test('should return a simple number string when no prefix is provided', () => {
    expect(uniqueId()).toBe('1');
  });
});
