import { getLocalStorageItem, setLocalStorageItem } from './web-storage-utils.js';

describe('Web Storage Utilities', () => {
  // Mock localStorage
  let localStorageMock = {};

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn((key) => localStorageMock[key] || null),
        setItem: jest.fn((key, value) => {
          localStorageMock[key] = value;
        }),
        removeItem: jest.fn((key) => {
          delete localStorageMock[key];
        }),
        clear: jest.fn(() => {
          localStorageMock = {};
        }),
        length: jest.fn(() => Object.keys(localStorageMock).length),
        key: jest.fn((index) => Object.keys(localStorageMock)[index] || null),
      },
      writable: true,
    });
  });

  beforeEach(() => {
    localStorageMock = {}; // Reset mock storage before each test
    jest.clearAllMocks();
  });

  describe('setLocalStorageItem', () => {
    it('should set a string item in localStorage', () => {
      setLocalStorageItem('key1', 'stringValue');
      expect(localStorage.setItem).toHaveBeenCalledWith('key1', 'stringValue');
      expect(localStorageMock.key1).toBe('stringValue');
    });

    it('should set an object item in localStorage as a JSON string', () => {
      const obj = { a: 1, b: 'test' };
      setLocalStorageItem('key2', obj);
      expect(localStorage.setItem).toHaveBeenCalledWith('key2', JSON.stringify(obj));
      expect(localStorageMock.key2).toBe(JSON.stringify(obj));
    });

    it('should set an array item in localStorage as a JSON string', () => {
      const arr = [1, 'test', true];
      setLocalStorageItem('key3', arr);
      expect(localStorage.setItem).toHaveBeenCalledWith('key3', JSON.stringify(arr));
      expect(localStorageMock.key3).toBe(JSON.stringify(arr));
    });

    it('should handle non-string primitive values correctly', () => {
      setLocalStorageItem('key4', 123);
      expect(localStorage.setItem).toHaveBeenCalledWith('key4', '123');
      expect(localStorageMock.key4).toBe('123');

      setLocalStorageItem('key5', true);
      expect(localStorage.setItem).toHaveBeenCalledWith('key5', 'true');
      expect(localStorageMock.key5).toBe('true');
    });

    it('should not throw an error if localStorage is undefined', () => {
      const originalLocalStorage = window.localStorage;
      delete window.localStorage;
      expect(() => setLocalStorageItem('key', 'value')).not.toThrow();
      window.localStorage = originalLocalStorage; // Restore
    });
  });

  describe('getLocalStorageItem', () => {
    it('should get a string item from localStorage', () => {
      localStorageMock.key1 = 'stringValue';
      expect(getLocalStorageItem('key1')).toBe('stringValue');
      expect(localStorage.getItem).toHaveBeenCalledWith('key1');
    });

    it('should get and parse an object item from localStorage', () => {
      const obj = { a: 1, b: 'test' };
      localStorageMock.key2 = JSON.stringify(obj);
      expect(getLocalStorageItem('key2')).toEqual(obj);
    });

    it('should get and parse an array item from localStorage', () => {
      const arr = [1, 'test', true];
      localStorageMock.key3 = JSON.stringify(arr);
      expect(getLocalStorageItem('key3')).toEqual(arr);
    });

    it('should return null if the item does not exist', () => {
      expect(getLocalStorageItem('nonExistentKey')).toBeNull();
    });

    it('should return the original string if JSON parsing fails', () => {
      localStorageMock.key4 = 'this is not valid json';
      expect(getLocalStorageItem('key4')).toBe('this is not valid json');
    });

    it('should return null if localStorage is undefined', () => {
      const originalLocalStorage = window.localStorage;
      delete window.localStorage;
      expect(getLocalStorageItem('key')).toBeNull();
      window.localStorage = originalLocalStorage; // Restore
    });
  });
});
