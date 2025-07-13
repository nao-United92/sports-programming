
import { setJSONItem, getJSONItem, removeJSONItem } from './storage-json-utils';

describe('storage-json-utils', () => {
  // Mock localStorage and sessionStorage
  let localStorageMock;
  let sessionStorageMock;

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

    sessionStorageMock = {
      _data: {},
      setItem: jest.fn((key, value) => {
        sessionStorageMock._data[key] = value;
      }),
      getItem: jest.fn((key) => sessionStorageMock._data[key] || null),
      removeItem: jest.fn((key) => {
        delete sessionStorageMock._data[key];
      }),
      clear: jest.fn(() => {
        sessionStorageMock._data = {};
      }),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
    Object.defineProperty(window, 'sessionStorage', {
      value: sessionStorageMock,
      writable: true,
    });
  });

  afterEach(() => {
    localStorageMock.clear();
    sessionStorageMock.clear();
  });

  describe('setJSONItem', () => {
    test('should store a JSON object in localStorage', () => {
      const key = 'testKey';
      const value = { name: 'Test', age: 30 };
      setJSONItem(key, value);
      expect(localStorageMock.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
      expect(localStorageMock.getItem(key)).toBe(JSON.stringify(value));
    });

    test('should store a JSON object in sessionStorage', () => {
      const key = 'testKeySession';
      const value = { data: [1, 2, 3] };
      setJSONItem(key, value, sessionStorage);
      expect(sessionStorageMock.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
      expect(sessionStorageMock.getItem(key)).toBe(JSON.stringify(value));
    });

    test('should return false if stringify fails', () => {
      const key = 'circularObject';
      const value = {};
      value.a = value; // Circular reference
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      const result = setJSONItem(key, value);
      expect(result).toBe(false);
      expect(localStorageMock.setItem).not.toHaveBeenCalled();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe('getJSONItem', () => {
    test('should retrieve and parse a JSON object from localStorage', () => {
      const key = 'testKey';
      const value = { name: 'Test', age: 30 };
      localStorageMock.setItem(key, JSON.stringify(value));

      const retrievedValue = getJSONItem(key);
      expect(retrievedValue).toEqual(value);
      expect(localStorageMock.getItem).toHaveBeenCalledWith(key);
    });

    test('should retrieve and parse a JSON object from sessionStorage', () => {
      const key = 'testKeySession';
      const value = { data: [1, 2, 3] };
      sessionStorageMock.setItem(key, JSON.stringify(value));

      const retrievedValue = getJSONItem(key, sessionStorage);
      expect(retrievedValue).toEqual(value);
      expect(sessionStorageMock.getItem).toHaveBeenCalledWith(key);
    });

    test('should return null if item does not exist', () => {
      const retrievedValue = getJSONItem('nonExistentKey');
      expect(retrievedValue).toBeNull();
    });

    test('should return null if parsing fails', () => {
      const key = 'invalidJson';
      localStorageMock.setItem(key, 'not a valid json');
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      const retrievedValue = getJSONItem(key);
      expect(retrievedValue).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe('removeJSONItem', () => {
    test('should remove an item from localStorage', () => {
      const key = 'testKey';
      localStorageMock.setItem(key, JSON.stringify({ a: 1 }));
      expect(localStorageMock.getItem(key)).not.toBeNull();

      removeJSONItem(key);
      expect(localStorageMock.removeItem).toHaveBeenCalledWith(key);
      expect(localStorageMock.getItem(key)).toBeNull();
    });

    test('should remove an item from sessionStorage', () => {
      const key = 'testKeySession';
      sessionStorageMock.setItem(key, JSON.stringify({ b: 2 }));
      expect(sessionStorageMock.getItem(key)).not.toBeNull();

      removeJSONItem(key, sessionStorage);
      expect(sessionStorageMock.removeItem).toHaveBeenCalledWith(key);
      expect(sessionStorageMock.getItem(key)).toBeNull();
    });
  });
});
