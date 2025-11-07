import { set, get, remove } from './browser-local-storage-utils.js';

describe('localStorageUtils', () => {
  // Mock localStorage before each test
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: jest.fn((key) => store[key] || null),
      setItem: jest.fn((key, value) => {
        store[key] = value.toString();
      }),
      removeItem: jest.fn((key) => {
        delete store[key];
      }),
      clear: jest.fn(() => {
        store = {};
      }),
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  it('should set and get a string value', () => {
    set('testString', 'hello');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('testString', JSON.stringify('hello'));
    expect(get('testString')).toBe('hello');
    expect(localStorageMock.getItem).toHaveBeenCalledWith('testString');
  });

  it('should set and get a number value', () => {
    set('testNumber', 123);
    expect(get('testNumber')).toBe(123);
  });

  it('should set and get a boolean value', () => {
    set('testBoolean', true);
    expect(get('testBoolean')).toBe(true);
  });

  it('should set and get an object', () => {
    const testObject = { a: 1, b: 'test' };
    set('testObject', testObject);
    expect(get('testObject')).toEqual(testObject);
  });

  it('should set and get an array', () => {
    const testArray = [1, 'a', { b: 2 }];
    set('testArray', testArray);
    expect(get('testArray')).toEqual(testArray);
  });

  it('should return null for a non-existent key', () => {
    expect(get('nonExistentKey')).toBeNull();
  });

  it('should remove an item', () => {
    set('itemToRemove', 'value');
    expect(get('itemToRemove')).toBe('value');
    remove('itemToRemove');
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('itemToRemove');
    expect(get('itemToRemove')).toBeNull();
  });

  it('should handle JSON parsing errors gracefully', () => {
    localStorageMock.setItem('invalidJson', '{"a":1,'); // Malformed JSON
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(get('invalidJson')).toBeNull();
    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });

  it('should handle localStorage.setItem errors gracefully', () => {
    localStorageMock.setItem.mockImplementationOnce(() => {
      throw new Error('Quota exceeded');
    });
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    set('largeItem', 'a'.repeat(1024 * 1024 * 5)); // Simulate large item
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error setting item in localStorage:', expect.any(Error));
    consoleErrorSpy.mockRestore();
  });
});