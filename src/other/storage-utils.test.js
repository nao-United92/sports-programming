// src/other/storage-utils.test.js

const { setLocalStorageItem, getLocalStorageItem } = require('./storage-utils');

describe('Storage Utils', () => {
  let localStorageMock;

  beforeEach(() => {
    localStorageMock = {
      _data: {},
      setItem: jest.fn((key, value) => {
        localStorageMock._data[key] = value;
      }),
      getItem: jest.fn((key) => localStorageMock._data[key] || null),
      removeItem: jest.fn((key) => {
        delete localStorageMock._data[key];
      }),
      clear: jest.fn(() => {
        localStorageMock._data = {};
      }),
    };

    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('setLocalStorageItem', () => {
    test('should set a string item in localStorage', () => {
      setLocalStorageItem('testKey', 'testValue');
      expect(localStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify('testValue'));
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify('testValue'));
    });

    test('should set an object item in localStorage', () => {
      const obj = { a: 1, b: 'hello' };
      setLocalStorageItem('objKey', obj);
      expect(localStorage.setItem).toHaveBeenCalledWith('objKey', JSON.stringify(obj));
      expect(localStorage.getItem('objKey')).toBe(JSON.stringify(obj));
    });

    test('should set an array item in localStorage', () => {
      const arr = [1, 2, 3];
      setLocalStorageItem('arrKey', arr);
      expect(localStorage.setItem).toHaveBeenCalledWith('arrKey', JSON.stringify(arr));
      expect(localStorage.getItem('arrKey')).toBe(JSON.stringify(arr));
    });

    test('should handle non-string keys gracefully', () => {
      setLocalStorageItem(null, 'value');
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });

    test('should handle localStorage being undefined', () => {
      Object.defineProperty(global, 'localStorage', { value: undefined, writable: true });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      setLocalStorageItem('key', 'value');
      expect(consoleErrorSpy).not.toHaveBeenCalled(); // No error should be logged if localStorage is undefined
      consoleErrorSpy.mockRestore();
    });
  });

  describe('getLocalStorageItem', () => {
    test('should get a string item from localStorage', () => {
      localStorage.setItem('testKey', JSON.stringify('testValue'));
      expect(getLocalStorageItem('testKey')).toBe('testValue');
    });

    test('should get an object item from localStorage', () => {
      const obj = { a: 1, b: 'hello' };
      localStorage.setItem('objKey', JSON.stringify(obj));
      expect(getLocalStorageItem('objKey')).toEqual(obj);
    });

    test('should get an array item from localStorage', () => {
      const arr = [1, 2, 3];
      localStorage.setItem('arrKey', JSON.stringify(arr));
      expect(getLocalStorageItem('arrKey')).toEqual(arr);
    });

    test('should return null if item does not exist', () => {
      expect(getLocalStorageItem('nonExistentKey')).toBeNull();
    });

    test('should return null for non-string keys gracefully', () => {
      expect(getLocalStorageItem(null)).toBeNull();
    });

    test('should return null if localStorage is undefined', () => {
      Object.defineProperty(global, 'localStorage', { value: undefined, writable: true });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      expect(getLocalStorageItem('key')).toBeNull();
      expect(consoleErrorSpy).not.toHaveBeenCalled(); // No error should be logged if localStorage is undefined
      consoleErrorSpy.mockRestore();
    });

    test('should return null if stored item is invalid JSON', () => {
      localStorage.setItem('invalidJson', 'not a json string');
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      expect(getLocalStorageItem('invalidJson')).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      consoleErrorSpy.mockRestore();
    });
  });
});
