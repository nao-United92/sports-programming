import { setSessionStorageItem, getSessionStorageItem, removeSessionStorageItem } from './session-storage-utils';

describe('Session Storage Utilities', () => {
  let sessionStorageMock;

  beforeEach(() => {
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

    Object.defineProperty(window, 'sessionStorage', {
      value: sessionStorageMock,
      writable: true,
    });

    sessionStorageMock.clear(); // 各テストの前にクリア
  });

  afterEach(() => {
    // モックをリストアする必要はないが、念のためクリア
    sessionStorageMock.clear();
  });

  describe('setSessionStorageItem', () => {
    test('should set a string item in session storage', () => {
      setSessionStorageItem('testKey', 'testValue');
      expect(sessionStorageMock.setItem).toHaveBeenCalledWith('testKey', JSON.stringify('testValue'));
      expect(sessionStorageMock.getItem('testKey')).toBe(JSON.stringify('testValue'));
    });

    test('should set an object item in session storage', () => {
      const obj = { name: 'Alice', age: 30 };
      setSessionStorageItem('testObject', obj);
      expect(sessionStorageMock.setItem).toHaveBeenCalledWith('testObject', JSON.stringify(obj));
      expect(sessionStorageMock.getItem('testObject')).toBe(JSON.stringify(obj));
    });

    test('should handle numbers and booleans', () => {
      setSessionStorageItem('testNumber', 123);
      expect(sessionStorageMock.setItem).toHaveBeenCalledWith('testNumber', JSON.stringify(123));
      setSessionStorageItem('testBoolean', true);
      expect(sessionStorageMock.setItem).toHaveBeenCalledWith('testBoolean', JSON.stringify(true));
    });

    test('should handle errors during setItem', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      sessionStorageMock.setItem.mockImplementationOnce(() => {
        throw new Error('QuotaExceededError');
      });
      setSessionStorageItem('errorKey', 'errorValue');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error setting session storage item:', expect.any(Error));
      consoleErrorSpy.mockRestore();
    });
  });

  describe('getSessionStorageItem', () => {
    test('should get a string item from session storage', () => {
      sessionStorageMock.setItem('testKey', JSON.stringify('testValue'));
      expect(getSessionStorageItem('testKey')).toBe('testValue');
    });

    test('should get an object item from session storage', () => {
      const obj = { name: 'Alice', age: 30 };
      sessionStorageMock.setItem('testObject', JSON.stringify(obj));
      expect(getSessionStorageItem('testObject')).toEqual(obj);
    });

    test('should return null if item does not exist', () => {
      expect(getSessionStorageItem('nonExistentKey')).toBeNull();
    });

    test('should return null and log error if item is invalid JSON', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      sessionStorageMock.setItem('invalidJson', 'not a json'); // 直接文字列をセット
      expect(getSessionStorageItem('invalidJson')).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error getting session storage item:', expect.any(Error));
      consoleErrorSpy.mockRestore();
    });

    test('should handle errors during getItem', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      sessionStorageMock.getItem.mockImplementationOnce(() => {
        throw new Error('SecurityError');
      });
      expect(getSessionStorageItem('errorKey')).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error getting session storage item:', expect.any(Error));
      consoleErrorSpy.mockRestore();
    });
  });

  describe('removeSessionStorageItem', () => {
    test('should remove an item from session storage', () => {
      sessionStorageMock.setItem('testKey', JSON.stringify('testValue')); // JSON.stringifyを追加
      expect(sessionStorageMock.getItem('testKey')).toBe(JSON.stringify('testValue'));
      removeSessionStorageItem('testKey');
      expect(sessionStorageMock.getItem('testKey')).toBeNull();
    });

    test('should handle errors during removeItem', () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      sessionStorageMock.removeItem.mockImplementationOnce(() => {
        throw new Error('SecurityError');
      });
      removeSessionStorageItem('errorKey');
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error removing session storage item:', expect.any(Error));
      consoleErrorSpy.mockRestore();
    });
  });
});