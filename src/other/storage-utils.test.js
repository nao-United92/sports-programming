import { localStore, sessionStore } from './storage-utils';

const createStorageMock = () => {
  let store = {};
  return {
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
};

Object.defineProperty(window, 'localStorage', { value: createStorageMock() });
Object.defineProperty(window, 'sessionStorage', { value: createStorageMock() });

describe('Storage Utilities', () => {
  afterEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  describe('localStore', () => {
    it('should set and get an item', () => {
      localStore.set('test', { a: 1 });
      expect(localStore.get('test')).toEqual({ a: 1 });
    });

    it('should remove an item', () => {
      localStore.set('test', 1);
      localStore.remove('test');
      expect(localStore.get('test')).toBeNull();
    });

    it('should clear all items', () => {
      localStore.set('test1', 1);
      localStore.set('test2', 2);
      localStore.clear();
      expect(localStore.get('test1')).toBeNull();
      expect(localStore.get('test2')).toBeNull();
    });
  });

  describe('sessionStore', () => {
    it('should set and get an item', () => {
      sessionStore.set('test', { a: 1 });
      expect(sessionStore.get('test')).toEqual({ a: 1 });
    });

    it('should remove an item', () => {
      sessionStore.set('test', 1);
      sessionStore.remove('test');
      expect(sessionStore.get('test')).toBeNull();
    });

    it('should clear all items', () => {
      sessionStore.set('test1', 1);
      sessionStore.set('test2', 2);
      sessionStore.clear();
      expect(sessionStore.get('test1')).toBeNull();
      expect(sessionStore.get('test2')).toBeNull();
    });
  });
});