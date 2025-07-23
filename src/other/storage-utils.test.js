import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem, setSessionStorageItem, getSessionStorageItem, removeSessionStorageItem, clearLocalStorage, clearSessionStorage, setCookie, getCookie, removeCookie } from './storage-utils.js';

describe('storage-utils', () => {
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: jest.fn((key) => store[key] || null),
      setItem: jest.fn((key, value) => {
        store[key] = value;
      }),
      removeItem: jest.fn((key) => {
        delete store[key];
      }),
      clear: jest.fn(() => {
        store = {};
      }),
    };
  })();

  const sessionStorageMock = (() => {
    let store = {};
    return {
      getItem: jest.fn((key) => store[key] || null),
      setItem: jest.fn((key, value) => {
        store[key] = value;
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

  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
  });

  beforeEach(() => {
    localStorageMock.clear();
    sessionStorageMock.clear();
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear(); // Add this line
    sessionStorageMock.getItem.mockClear();
    sessionStorageMock.setItem.mockClear();
    sessionStorageMock.removeItem.mockClear();
    sessionStorageMock.clear.mockClear(); // Add this line
  });

  describe('localStorage', () => {
    test('setLocalStorageItem should store stringified value', () => {
      const testKey = 'testString';
      const testValue = 'hello';
      setLocalStorageItem(testKey, testValue);
      expect(localStorageMock.setItem).toHaveBeenCalledWith(testKey, JSON.stringify(testValue));
    });

    test('setLocalStorageItem should store object as stringified JSON', () => {
      const testKey = 'testObject';
      const testValue = { a: 1, b: 'test' };
      setLocalStorageItem(testKey, testValue);
      expect(localStorageMock.setItem).toHaveBeenCalledWith(testKey, JSON.stringify(testValue));
    });

    test('getLocalStorageItem should retrieve and parse stringified value', () => {
      const testKey = 'testString';
      const testValue = 'hello';
      localStorageMock.setItem(testKey, JSON.stringify(testValue));
      expect(getLocalStorageItem(testKey)).toBe(testValue);
      expect(localStorageMock.getItem).toHaveBeenCalledWith(testKey);
    });

    test('getLocalStorageItem should retrieve and parse object from JSON', () => {
      const testKey = 'testObject';
      const testValue = { a: 1, b: 'test' };
      localStorageMock.setItem(testKey, JSON.stringify(testValue));
      expect(getLocalStorageItem(testKey)).toEqual(testValue);
      expect(localStorageMock.getItem).toHaveBeenCalledWith(testKey);
    });

    test('getLocalStorageItem should return null if item not found', () => {
      expect(getLocalStorageItem('nonExistent')).toBeNull();
    });

    test('removeLocalStorageItem should remove item', () => {
      const testKey = 'testRemove';
      setLocalStorageItem(testKey, 'value');
      removeLocalStorageItem(testKey);
      expect(localStorageMock.removeItem).toHaveBeenCalledWith(testKey);
      expect(getLocalStorageItem(testKey)).toBeNull();
    });

    test('setLocalStorageItem should handle errors', () => {
      localStorageMock.setItem.mockImplementationOnce(() => {
        throw new Error('Quota exceeded');
      });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      setLocalStorageItem('errorKey', 'errorValue');
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });

    test('getLocalStorageItem should handle errors', () => {
      localStorageMock.getItem.mockImplementationOnce(() => {
        throw new Error('Read error');
      });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      expect(getLocalStorageItem('errorKey')).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });

    test('clearLocalStorage should clear all items', () => {
      setLocalStorageItem('key1', 'value1');
      setLocalStorageItem('key2', 'value2');
      clearLocalStorage();
      expect(localStorageMock.clear).toHaveBeenCalledTimes(1);
      expect(getLocalStorageItem('key1')).toBeNull();
      expect(getLocalStorageItem('key2')).toBeNull();
    });
  });

  describe('sessionStorage', () => {
    test('setSessionStorageItem should store stringified value', () => {
      const testKey = 'testString';
      const testValue = 'hello';
      setSessionStorageItem(testKey, testValue);
      expect(sessionStorageMock.setItem).toHaveBeenCalledWith(testKey, JSON.stringify(testValue));
    });

    test('setSessionStorageItem should store object as stringified JSON', () => {
      const testKey = 'testObject';
      const testValue = { a: 1, b: 'test' };
      setSessionStorageItem(testKey, testValue);
      expect(sessionStorageMock.setItem).toHaveBeenCalledWith(testKey, JSON.stringify(testValue));
    });

    test('getSessionStorageItem should retrieve and parse stringified value', () => {
      const testKey = 'testString';
      const testValue = 'hello';
      sessionStorageMock.setItem(testKey, JSON.stringify(testValue));
      expect(getSessionStorageItem(testKey)).toBe(testValue);
      expect(sessionStorageMock.getItem).toHaveBeenCalledWith(testKey);
    });

    test('getSessionStorageItem should retrieve and parse object from JSON', () => {
      const testKey = 'testObject';
      const testValue = { a: 1, b: 'test' };
      sessionStorageMock.setItem(testKey, JSON.stringify(testValue));
      expect(getSessionStorageItem(testKey)).toEqual(testValue);
      expect(sessionStorageMock.getItem).toHaveBeenCalledWith(testKey);
    });

    test('getSessionStorageItem should return null if item not found', () => {
      expect(getSessionStorageItem('nonExistent')).toBeNull();
    });

    test('removeSessionStorageItem should remove item', () => {
      const testKey = 'testRemove';
      setSessionStorageItem(testKey, 'value');
      removeSessionStorageItem(testKey);
      expect(sessionStorageMock.removeItem).toHaveBeenCalledWith(testKey);
      expect(getSessionStorageItem(testKey)).toBeNull();
    });

    test('setSessionStorageItem should handle errors', () => {
      sessionStorageMock.setItem.mockImplementationOnce(() => {
        throw new Error('Quota exceeded');
      });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      setSessionStorageItem('errorKey', 'errorValue');
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });

    test('getSessionStorageItem should handle errors', () => {
      sessionStorageMock.getItem.mockImplementationOnce(() => {
        throw new Error('Read error');
      });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      expect(getSessionStorageItem('errorKey')).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });

    test('clearSessionStorage should clear all items', () => {
      setSessionStorageItem('key1', 'value1');
      setSessionStorageItem('key2', 'value2');
      clearSessionStorage();
      expect(sessionStorageMock.clear).toHaveBeenCalledTimes(1);
      expect(getSessionStorageItem('key1')).toBeNull();
      expect(getSessionStorageItem('key2')).toBeNull();
    });
  });

  describe('Cookies', () => {
    beforeEach(() => {
      Object.defineProperty(document, 'cookie', {
        writable: true,
        value: '',
      });
    });

    test('setCookie should set a cookie', () => {
      setCookie('testName', 'testValue', 7);
      expect(document.cookie).toContain('testName=testValue');
    });

    test('getCookie should retrieve a cookie', () => {
      document.cookie = 'testCookie=testValue';
      expect(getCookie('testCookie')).toBe('testValue');
    });

    test('getCookie should return null if cookie not found', () => {
      expect(getCookie('nonExistentCookie')).toBeNull();
    });

    test('removeCookie should remove a cookie', () => {
      setCookie('testRemove', 'value', 7);
      removeCookie('testRemove');
      expect(document.cookie).not.toContain('testRemove');
    });
  });
});