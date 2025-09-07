import {
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
  setSessionStorageItem,
  getSessionStorageItem,
  removeSessionStorageItem,
} from './storage-utils.js';

describe('Storage Utilities', () => {
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

  describe('localStorage', () => {
    it('should set and get an item', () => {
      setLocalStorageItem('testKey', { name: 'testValue' });
      expect(localStorageMock.setItem).toHaveBeenCalledWith('testKey', JSON.stringify({ name: 'testValue' }));
      expect(getLocalStorageItem('testKey')).toEqual({ name: 'testValue' });
    });

    it('should return null if item not found', () => {
      expect(getLocalStorageItem('nonExistentKey')).toBeNull();
    });

    it('should remove an item', () => {
      setLocalStorageItem('testKey', 'testValue');
      removeLocalStorageItem('testKey');
      expect(localStorageMock.removeItem).toHaveBeenCalledWith('testKey');
      expect(getLocalStorageItem('testKey')).toBeNull();
    });

    it('should handle errors when setting item', () => {
      localStorageMock.setItem.mockImplementation(() => {
        throw new Error('Quota exceeded');
      });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      setLocalStorageItem('testKey', 'testValue');
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });

    it('should handle errors when getting item', () => {
      localStorageMock.getItem.mockImplementation(() => {
        throw new Error('Read error');
      });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      expect(getLocalStorageItem('testKey')).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  describe('sessionStorage', () => {
    it('should set and get an item', () => {
      setSessionStorageItem('testKey', { name: 'testValue' });
      expect(sessionStorageMock.setItem).toHaveBeenCalledWith('testKey', JSON.stringify({ name: 'testValue' }));
      expect(getSessionStorageItem('testKey')).toEqual({ name: 'testValue' });
    });

    it('should return null if item not found', () => {
      expect(getSessionStorageItem('nonExistentKey')).toBeNull();
    });

    it('should remove an item', () => {
      setSessionStorageItem('testKey', 'testValue');
      removeSessionStorageItem('testKey');
      expect(sessionStorageMock.removeItem).toHaveBeenCalledWith('testKey');
      expect(getSessionStorageItem('testKey')).toBeNull();
    });

    it('should handle errors when setting item', () => {
      sessionStorageMock.setItem.mockImplementation(() => {
        throw new Error('Quota exceeded');
      });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      setSessionStorageItem('testKey', 'testValue');
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });

    it('should handle errors when getting item', () => {
      sessionStorageMock.getItem.mockImplementation(() => {
        throw new Error('Read error');
      });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      expect(getSessionStorageItem('testKey')).toBeNull();
      expect(consoleErrorSpy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });
});