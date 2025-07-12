import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem, clearLocalStorage, setSessionStorageItem, getSessionStorageItem, removeSessionStorageItem, clearSessionStorage } from './storage-utils.js';

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
});
