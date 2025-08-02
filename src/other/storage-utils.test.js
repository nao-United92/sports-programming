import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  clearSessionStorage
} from './storage-utils.js';

// Mock Web Storage API
const createStorageMock = () => {
  let store = {};
  return {
    getItem: jest.fn(key => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn(key => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
};

const localStorageMock = createStorageMock();
const sessionStorageMock = createStorageMock();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });


describe('Storage Utilities', () => {

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  describe('localStorage', () => {
    test('should set and get a string value', () => {
      setLocalStorage('testString', 'hello');
      expect(localStorage.setItem).toHaveBeenCalledWith('testString', '"hello"');
      // To test get, we need to simulate the stored value in our mock
      localStorageMock.getItem.mockReturnValueOnce(JSON.stringify('hello'));
      expect(getLocalStorage('testString')).toBe('hello');
    });

    test('should set and get an object value', () => {
      const obj = { a: 1, b: 'test' };
      setLocalStorage('testObject', obj);
      expect(localStorage.setItem).toHaveBeenCalledWith('testObject', JSON.stringify(obj));
      localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(obj));
      expect(getLocalStorage('testObject')).toEqual(obj);
    });

    test('should return null for a non-existent key', () => {
      localStorageMock.getItem.mockReturnValueOnce(null);
      expect(getLocalStorage('nonExistent')).toBeNull();
    });

    test('should remove a value', () => {
      removeLocalStorage('toBeRemoved');
      expect(localStorage.removeItem).toHaveBeenCalledWith('toBeRemoved');
    });

    test('should clear all values', () => {
      clearLocalStorage();
      expect(localStorage.clear).toHaveBeenCalled();
    });
  });

  describe('sessionStorage', () => {
    test('should set and get a string value', () => {
      setSessionStorage('testString', 'hello');
      expect(sessionStorage.setItem).toHaveBeenCalledWith('testString', '"hello"');
      sessionStorageMock.getItem.mockReturnValueOnce(JSON.stringify('hello'));
      expect(getSessionStorage('testString')).toBe('hello');
    });

    test('should set and get an object value', () => {
      const obj = { a: 1, b: 'test' };
      setSessionStorage('testObject', obj);
      expect(sessionStorage.setItem).toHaveBeenCalledWith('testObject', JSON.stringify(obj));
      sessionStorageMock.getItem.mockReturnValueOnce(JSON.stringify(obj));
      expect(getSessionStorage('testObject')).toEqual(obj);
    });

    test('should return null for a non-existent key', () => {
      sessionStorageMock.getItem.mockReturnValueOnce(null);
      expect(getSessionStorage('nonExistent')).toBeNull();
    });

    test('should remove a value', () => {
      removeSessionStorage('toBeRemoved');
      expect(sessionStorage.removeItem).toHaveBeenCalledWith('toBeRemoved');
    });

    test('should clear all values', () => {
      clearSessionStorage();
      expect(sessionStorage.clear).toHaveBeenCalled();
    });
  });
});
