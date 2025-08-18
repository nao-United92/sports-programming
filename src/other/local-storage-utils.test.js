import { setLocalStorageItem, getLocalStorageItem } from './local-storage-utils';

describe('Local Storage Utilities', () => {
  // Mock localStorage
  const localStorageMock = (() => {
    let store = {};
    return {
      __store: store, // Expose for direct access in tests
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

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  beforeEach(() => {
    localStorageMock.clear();
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    // setItemのモックをデフォルトの実装に戻す
    localStorageMock.setItem.mockImplementation((key, value) => {
      localStorageMock.__store[key] = JSON.stringify(value); // JSON.stringify を追加
    });
  });

  describe('setLocalStorageItem', () => {
    it('should set a string item', () => {
      setLocalStorageItem('testKey', 'testValue');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('testKey', JSON.stringify('testValue'));
    });

    it('should set an object item', () => {
      const obj = { a: 1, b: 'hello' };
      setLocalStorageItem('testObject', obj);
      expect(localStorageMock.setItem).toHaveBeenCalledWith('testObject', JSON.stringify(obj));
    });

    it('should return true on success', () => {
      expect(setLocalStorageItem('key', 'value')).toBe(true);
    });

    it('should return false and log error on failure', () => {
      localStorageMock.setItem.mockImplementation(() => {
        throw new Error('Quota exceeded');
      });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      expect(setLocalStorageItem('key', 'value')).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe('getLocalStorageItem', () => {
    it('should get a string item', () => {
      localStorageMock.setItem('testKey', JSON.stringify('testValue'));
      expect(getLocalStorageItem('testKey')).toBe('testValue');
    });

    it('should get an object item', () => {
      const obj = { a: 1, b: 'hello' };
      localStorageMock.setItem('testObject', JSON.stringify(obj));
      expect(getLocalStorageItem('testObject')).toEqual(obj);
    });

    it('should return null if item does not exist', () => {
      expect(getLocalStorageItem('nonExistentKey')).toBeNull();
    });

    it('should return null and log error if item is invalid JSON', () => {
      localStorageMock.setItem('invalidJson', 'not a json');
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      expect(getLocalStorageItem('invalidJson')).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });
});