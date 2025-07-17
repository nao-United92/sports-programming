import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem, clearLocalStorage, setSessionStorageItem, getSessionStorageItem, removeSessionStorageItem, clearSessionStorage, hasLocalStorage, hasSessionStorage } from './storage-utils.js';

describe('storage-utils', () => {
  describe('localStorage', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should set and get an item from localStorage', () => {
      setLocalStorageItem('test', { a: 1 });
      expect(getLocalStorageItem('test')).toEqual({ a: 1 });
    });

    it('should remove an item from localStorage', () => {
      setLocalStorageItem('test', { a: 1 });
      removeLocalStorageItem('test');
      expect(getLocalStorageItem('test')).toBeNull();
    });

    it('should clear localStorage', () => {
      setLocalStorageItem('test', { a: 1 });
      clearLocalStorage();
      expect(getLocalStorageItem('test')).toBeNull();
    });
  });

  describe('sessionStorage', () => {
    beforeEach(() => {
      sessionStorage.clear();
    });

    it('should set and get an item from sessionStorage', () => {
      setSessionStorageItem('test', { a: 1 });
      expect(getSessionStorageItem('test')).toEqual({ a: 1 });
    });

    it('should remove an item from sessionStorage', () => {
      setSessionStorageItem('test', { a: 1 });
      removeSessionStorageItem('test');
      expect(getSessionStorageItem('test')).toBeNull();
    });

    it('should clear sessionStorage', () => {
      setSessionStorageItem('test', { a: 1 });
      clearSessionStorage();
      expect(getSessionStorageItem('test')).toBeNull();
    });
  });

  describe('hasLocalStorage', () => {
    it('should return true if localStorage is available', () => {
      // Mock localStorage to be available
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: jest.fn(),
          removeItem: jest.fn(),
        },
        writable: true,
      });
      expect(hasLocalStorage()).toBe(true);
      expect(localStorage.setItem).toHaveBeenCalledWith('__localStorageTest__', '__localStorageTest__');
      expect(localStorage.removeItem).toHaveBeenCalledWith('__localStorageTest__');
    });

    it('should return false if localStorage is not available', () => {
      // Mock localStorage to throw an error
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: jest.fn(() => { throw new Error('Quota exceeded'); }),
          removeItem: jest.fn(),
        },
        writable: true,
      });
      expect(hasLocalStorage()).toBe(false);
    });
  });

  describe('hasSessionStorage', () => {
    it('should return true if sessionStorage is available', () => {
      // Mock sessionStorage to be available
      Object.defineProperty(window, 'sessionStorage', {
        value: {
          setItem: jest.fn(),
          removeItem: jest.fn(),
        },
        writable: true,
      });
      expect(hasSessionStorage()).toBe(true);
      expect(sessionStorage.setItem).toHaveBeenCalledWith('__sessionStorageTest__', '__sessionStorageTest__');
      expect(sessionStorage.removeItem).toHaveBeenCalledWith('__sessionStorageTest__');
    });

    it('should return false if sessionStorage is not available', () => {
      // Mock sessionStorage to throw an error
      Object.defineProperty(window, 'sessionStorage', {
        value: {
          setItem: jest.fn(() => { throw new Error('Quota exceeded'); }),
          removeItem: jest.fn(),
        },
        writable: true,
      });
      expect(hasSessionStorage()).toBe(false);
    });
  });
});
